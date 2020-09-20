import React from 'react';

import banner from '../../assets/images/banner.png';

import styles from './index.module.css';

const BannerContentComponent = () => {
  return (
    <section>
      <h1><strong>What is Twitter?</strong></h1>
      <img className={styles.bannerImg} src={banner} alt="what is twitter banner" />
      <h3>
        Twitter is a service for friends, family and co-workers to communicate and stay connected through
        the exchange of quick. frequent answers to one simple question: <b>What are you doing?</b>
      </h3>
      <div className={styles.buttonSec}>
        <button className={styles.button}>Get Started - Join!</button>
      </div>
    </section>
  );
};

export default BannerContentComponent;
