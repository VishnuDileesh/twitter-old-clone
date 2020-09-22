import React from 'react';
import { Link } from 'react-router-dom';


import styles from './index.module.css';

const BannerContentComponent = ({ linkTo, linkText }) => {
  return (
    <section>
      <h1><strong>What is Twitter?</strong></h1>
        <img className={styles.bannerImg} src="assets/images/banner.png" alt="what is twitter banner" />
      <h3>
        Twitter is a service for friends, family and co-workers to communicate and stay connected through
        the exchange of quick. frequent answers to one simple question: <b>What are you doing?</b>
      </h3>
      <div className={styles.buttonSec}>
        <Link className={styles.button} to={linkTo}>{linkText}</Link>
      </div>
    </section>
  );
};

export default BannerContentComponent;
