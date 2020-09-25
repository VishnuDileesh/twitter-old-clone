import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

import { auth } from '../../services/firebase';

const MenuComponent = () => {

  const userLogout = () => {
    auth.signOut();
  }

  return (

      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}><Link className={styles.link} to="/">Home</Link></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Profile</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Find People</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Settings</a></li>
          <li className={styles.li}><a className={styles.link} href="https://github.com">Help</a></li>
          <li className={styles.li}><Link className={styles.link} onClick={userLogout} to="/login">Sign out</Link></li>
        </ul>
      </nav>


  );

};


export default MenuComponent;
