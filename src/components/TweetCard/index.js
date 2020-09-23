import React from 'react';

import styles from './index.module.css';

const TweetCard = ({ tweet }) => {
  return (
      <div className={styles.tweetCard}>
        <img className={styles.tweetUserImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" alt=""/>
        <div>
          <h2>
            <b>BBC</b> {tweet}
          </h2>
          <h6>time</h6>
        </div>
      </div>
  );
};

export default TweetCard;
