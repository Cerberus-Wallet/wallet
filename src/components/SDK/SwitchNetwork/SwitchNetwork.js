import { useState } from 'react'
import cn from 'classnames'

import { Button } from 'components/common'

import styles from './SwitchNetwork.module.scss'
import Networks from './Networks/Networks'

const SwitchNetwork = () => {
  const [supported, setSupported] = useState(true)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Switch Network Request</h1>
      <div className={styles.body}>
        {/* Placeholder logo */}
        <div className={styles.siteLogo} />
        <h2 className={styles.siteName}>app.pooltogether.com</h2>
        <p className={styles.message}>
          {supported ? 'Allow this site to switch the network?' : "Ambire Wallet doesn't support this network"}
        </p>
        {supported ? <Networks
          fromNetworkId={1}
          fromNetworkName="Ethereum"
          toNetworkId={56}
          toNetworkName="Binance Smart Chain"
        /> : null}
      </div>
      {supported ? (
        <div className={styles.buttons}>
          <Button small danger className={styles.button}>
            Reject
          </Button>
          <Button small primaryGradient className={styles.button} onClick={() => setSupported((prev) => !prev)}>
            Switch Network
          </Button>
        </div>
      ) : (
        <Button
          danger
          small
          className={cn(styles.button, styles.singleButton)}
          onClick={() => setSupported((prev) => !prev)}
        >
          Deny
        </Button>
      )}
    </div>
  )
}

export default SwitchNetwork