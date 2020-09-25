import React from 'react';

import styles from './index.module.css';


const HeaderComponent = ({ children }) => {


  return(
    <header className={styles.header}>
      { children }
    </header>
  );
};

export default HeaderComponent;
