import React from 'react';

import styles from './index.module.css';


const BannerComponent = ({children}) => {
  return (
    <main className={styles.banner}>
      {children}
    </main>
  );
};

export default BannerComponent;
