import React from 'react';

import logo from '../../assets/images/logo.png';
import styles from './index.module.css';

const HeaderComponent = () => {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="twitter old logo"/>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Home</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Profile</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Find People</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Settings</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Help</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Sign out</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
