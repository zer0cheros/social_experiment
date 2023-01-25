import React from 'react'
import styles from '../../styles/Topbar.module.css'

const Topbar_comp = () => {
  return (
    <div id='navbar' className={styles.topbar_container}>
        <div className={styles.bottom_topbar}>
          <p className={styles.home_text}>TEXT1</p>
          <p>TEXT2</p>
          <p>TEXT3</p>
          
      </div>
      <div className={styles.under_bottom_topbar}>

      </div>
    </div>
  )
}

export default Topbar_comp
