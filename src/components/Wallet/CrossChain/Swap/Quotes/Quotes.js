import { useState } from 'react'
import cn from 'classnames'

import networks from 'consts/networks'

import { useToasts } from 'hooks/toasts'
import { Button, Loading } from 'components/common'
import useMovr from 'components/Wallet/CrossChain/useMovr'
import Summary from './Summary/Summary'
import Routes from './Routes/Routes'

import styles from './Quotes.module.scss'

const formatAmount = (amount, asset) => amount / Math.pow(10, asset.decimals)
const formatFeeAmount = (fee, route) => {
  return formatAmount(fee.amount, fee.asset)
}
const getNetwork = (id) => networks.find(({ chainId }) => chainId === id)

const Quotes = ({ addRequest, selectedAccount, fromTokensItems, quotes, onQuotesConfirmed, onCancel }) => {
  const { addToast } = useToasts()
  const { approvalBuildTx, sendBuildTx } = useMovr()

  const { toAsset } = quotes
  const fromAsset = fromTokensItems.find(({ value }) => value === quotes.fromAsset.address)
  const fromNetwork = getNetwork(quotes.fromAsset.chainId)
  const toNetwork = getNetwork(toAsset.chainId)
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [loading, setLoading] = useState(false)

  const refuel = quotes.refuel
  const routes = quotes.routes.map((route) => {
    const { userTxs } = route
    const bridgeStep = userTxs.map((tx) => tx.steps.find((s) => s.type === 'bridge')).find((x) => x)
    const bridgeRoute = userTxs.find((tx) => tx.steps.find((s) => s.type === 'bridge'))
    const middlewareRoute = userTxs.map((tx) => tx.steps.find((s) => s.type === 'middleware')).find((x) => x)

    return {
      ...route,
      bridgeStep,
      middlewareRoute,
      userTxType: bridgeRoute.userTxType,
      txType: bridgeRoute.txType,
      middlewareFee: middlewareRoute?.protocolFees ? formatFeeAmount(middlewareRoute?.protocolFees, route) : 0,
      bridgeFee: bridgeStep?.protocolFees ? formatFeeAmount(bridgeStep?.protocolFees, route) : 0,
      fromAsset,
      toAsset
    }
  })

  const sendTx = (id, chainId, to, data, value = '0x00') => {
    addRequest({
      id,
      chainId,
      account: selectedAccount,
      type: 'eth_sendTransaction',
      txn: {
        to,
        data,
        value,
      },
    })
  }

  const onConfirm = async () => {
    setLoading(true)

    try {
      const route = routes.find(({ routeId }) => routeId === selectedRoute)
      // let fromAsset, inputAmount = null
      // if (middlewareRoute) {
      //     fromAsset = middlewareRoute.fromAsset
      //     inputAmount = middlewareRoute.inputAmount
      // } else {
      //     fromAsset = bridgeRoute.fromAsset
      //     inputAmount = bridgeRoute.inputAmount
      // }

      // const { toAsset, outputAmount, bridgeInfo } = bridgeRoute

      const approvalTxn = await Promise.all(
        route.userTxs
          .filter((tx) => tx?.approvalData)
          .map((tx) => {
            return approvalBuildTx(
              route.bridgeStep.fromChainId,
              selectedAccount,
              tx?.approvalData?.allowanceTarget,
              tx?.approvalData?.approvalTokenAddress,
              tx?.approvalData?.minimumApprovalAmount
            )
          })
      )

      approvalTxn.map((tx) =>
        sendTx(`transfer_approval_crosschain_${Date.now()}`, route.bridgeStep.fromChainId, tx.to, tx.data)
      )

      const tx = await sendBuildTx(route, refuel)
      sendTx(`transfer_send_crosschain_${Date.now()}`, route.bridgeStep.fromChainId, tx.txTarget, tx.txData, tx.value)

      const serviceTimeMinutes = new Date((route?.serviceTime || 0) + (route?.serviceTime || 0)).getMinutes()
      onQuotesConfirmed({
        txData: tx.txData,
        serviceTimeMinutes,
        to: {
          chainId: toAsset.chainId,
          asset: toAsset,
          amount: route.toAmount,
        },
      })
      setLoading(false)
      onCancel()
    } catch (e) {
      console.error(e)
      addToast(e.message || e, { error: true })
      setLoading(false)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <Summary fromNetwork={fromNetwork} fromAsset={fromAsset} toNetwork={toNetwork} toAsset={toAsset} />

        {loading ? <Loading /> : <Routes routes={routes} setSelectedRoute={setSelectedRoute} />}
      </div>

      <div className={cn(styles.buttons, styles.singleButton)}>
        <Button
          border
          disabled={loading}
          onClick={onCancel}
          className={styles.button}
        >
          {routes.length ? 'Cancel' : 'Go Back'}
        </Button>
        {routes.length ? (
          <Button
            primaryGradient
            disabled={!selectedRoute || loading}
            onClick={onConfirm}
            className={styles.button}
          >
            Confirm
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default Quotes