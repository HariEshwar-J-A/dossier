import React from 'react'

import styles from './TopNavigator.module.scss'

const TopNavigator = () => {
  const onTopNavigatorClick = () => {
    document.querySelector('body').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.topNavigator} onClick={onTopNavigatorClick}>
      <div className={styles.navButton}>
        <i className='fi-rr-arrow-up'></i>
      </div>
    </div>
  )
}

export default TopNavigator
