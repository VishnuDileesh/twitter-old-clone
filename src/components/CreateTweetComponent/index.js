import React, {useState} from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';


const CreateTweetComponent = () => {

  const [newTweet, setNewTweet] = useState('');

  const handleChange = (e) => setNewTweet(e.target.value);

  const submitTweet = () => {
    console.log(newTweet);

    db.collection('tweets').add({
      tweet: newTweet,
      timestamp: Date.now(),
    })
      .then((data) => console.log(data.id))
      .catch((error) => console.log(error))

    setNewTweet('');
  };

  return (
    <section className={styles.createtweetcard}>
      <header className={styles.cardHeader}>
        <h1>What's happening?</h1>
        <h1 className={styles.count}>140</h1>
      </header>
      <section className={styles.tweetInputSec}>
        <textarea className={styles.tweetInput} value={newTweet} onChange={handleChange} rows="4"></textarea>
      </section>
      <footer className={styles.cardFooter}>
        <h4 className={styles.h4}>Share your first tweet with the world</h4>
        <button className={styles.btn} onClick={submitTweet}>Tweet</button>
      </footer>
    </section>
  );
};

export default CreateTweetComponent;
