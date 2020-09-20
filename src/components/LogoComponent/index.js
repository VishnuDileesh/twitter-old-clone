import React from 'react';

import styles from './index.module.css';
import logo from '../../assets/images/logo.png';

const LogoComponent = () => {
  return (
    
      <img className={styles.logo} src={logo} alt="twitter old logo"/>
  );
};

export default LogoComponent;
