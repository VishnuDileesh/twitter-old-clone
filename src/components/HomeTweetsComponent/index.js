import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';


import TweetCard from '../TweetCard/index';


const HomeTweetsComponent = () => {


  const [tweets, setTweets] = useState([]);


  useEffect(() => {


    const unsubscribeTweets = db.collection('tweets').orderBy('timestamp', 'desc').onSnapshot((tweetsSnapshot) => {


      setTweets(
        tweetsSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      )

    });


    return () => {
      return unsubscribeTweets;
    }


  }, []);


  return(
    <section className={styles.container}>
      <h1>Home</h1>

        { tweets.map((tweet, index) => {

          return (
            <TweetCard key={tweet.id} tweet={tweet}/>
          );
        }) }
    </section>
  );
};

export default HomeTweetsComponent;
