import React from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';

const TweetCard = ({ tweet }) => {



  return (
      <div className={styles.tweetCard}>
        <img className={styles.tweetUserImg} src="" alt=""/>
        <div>
          <h2>
            <b>jeff</b> {tweet.tweet}
          </h2>
          <h6>{ new Date(tweet.timestamp).toString() }</h6>
        </div>
      </div>
  );
};

export default TweetCard;
