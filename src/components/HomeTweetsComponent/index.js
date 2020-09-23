import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';


import TweetCard from '../TweetCard/index';


const HomeTweetsComponent = () => {


  const [tweets, setTweets] = useState([]);


  useEffect(() => {

    db.collection('tweets').get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());


        setTweets(data);

    });

    // TODO - clean up

  }, [tweets, setTweets]);


  return(
    <section className={styles.container}>
      <h1>Home</h1>
        { tweets.map((tweet, index) => {
          return (
            <TweetCard key={index} tweet={tweet.tweet}/>
          );
        }) }
    </section>
  );
};

export default HomeTweetsComponent;
