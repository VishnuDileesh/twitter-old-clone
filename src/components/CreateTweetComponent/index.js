import React, { useState, useEffect, useContext } from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';

import { AuthContext } from '../../context/Auth';


const CreateTweetComponent = () => {

  const { currentUser } = useContext(AuthContext);


  const [newTweet, setNewTweet] = useState('');
  const [charCount, setCharCount] = useState(140);


  const handleChange = (e) => {
    if(e.target.value.length > 140){
      setNewTweet(e.target.value.slice(0, 140));
    }else{
      setNewTweet(e.target.value);
    }
  }

  useEffect(() => {
    setCharCount(140 - newTweet.length);
  }, [newTweet]);


  const submitTweet = () => {

    db.collection('tweets').add({
      tweet: newTweet,
      owner: currentUser.uid,
      timestamp: Date.now(),
    })
      .catch((error) => console.log(error))

    setNewTweet('');
  };

  return (
    <section className={styles.createtweetcard}>
      <header className={styles.cardHeader}>
        <h1>What's happening?</h1>
          <h1 className={styles.count}>{ charCount }</h1>
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
