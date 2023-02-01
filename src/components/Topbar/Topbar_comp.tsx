import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Topbar.module.css'

const Topbar_comp = () => {
  return (
    <div id='navbar' className={styles.topbar_container}>
        <div className={styles.bottom_topbar}>
          <Link href={'/register'}><p className={styles.home_text}>Register</p></Link>
          <Link href={'/api/auth/signin'}><p>Login</p></Link>
          <Link href={'/'}><p>Home</p></Link>
          
      </div>
      <div className={styles.under_bottom_topbar}>

      </div>
    </div>
  )
}

export default Topbar_comp
