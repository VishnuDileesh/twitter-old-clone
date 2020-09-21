import React from 'react';

import styles from './index.module.css';

import BannerContentComponent from '../BannerContentComponent';
import LoginFormComponent from '../LoginFormComponent';

const BannerComponent = () => {
  return (
    <main className={styles.banner}>
      <BannerContentComponent/>
      <LoginFormComponent/>
    </main>
  );
};

export default BannerComponent;
