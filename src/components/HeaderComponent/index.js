import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

import LogoComponent from '../LogoComponent';

import { auth } from '../../services/firebase';
import { AuthContext } from '../../context/Auth';



const HeaderComponent = () => {

  const { currentUser } = useContext(AuthContext);


  const userLogout = () => {
    auth.signOut();
  }

  return(
    <header className={styles.header}>
      <LogoComponent/>
      { !!currentUser &&  
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
      }
    </header>
  );
};

export default HeaderComponent;
