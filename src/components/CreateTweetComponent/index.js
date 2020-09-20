import React from 'react';

import styles from './index.module.css';

const CreateTweetComponent = () => {
  return (
    <section className={styles.createtweetcard}>
      <header className={styles.cardHeader}>
        <h1>What's happening?</h1>
        <h1 className={styles.count}>140</h1>
      </header>
      <section className={styles.tweetInputSec}>
        <textarea className={styles.tweetInput} rows="4"></textarea>
      </section>
      <footer className={styles.cardFooter}>
        <h4 className={styles.h4}>Share your first tweet with the world</h4>
        <button className={styles.btn}>Tweet</button>
      </footer>
    </section>
  );
};

export default CreateTweetComponent;
