import React from 'react';

import styles from './index.module.css';

import BannerContentComponent from '../BannerContentComponent';


const BannerComponent = () => {
  return (
    <main className={styles.banner}>
      <BannerContentComponent/>
      {/* login form */}
    </main>
  );
};

export default BannerComponent;
