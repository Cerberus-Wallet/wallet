import { RiWifiOffLine } from 'react-icons/ri'

import styles from './OfflineView.module.scss'

export default function OfflineView() {
  return (
    <div className={styles.wrapper}>
      <RiWifiOffLine className={styles.icon} />
      <p className={styles.text}>You are currently offline.</p>
    </div>
  )
}
