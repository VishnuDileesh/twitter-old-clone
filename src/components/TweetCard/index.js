import React, { useState, useEffect } from 'react';

import styles from './index.module.css';

import { db } from '../../services/firebase';

const TweetCard = ({ tweet }) => {

  const [user, setUser] = useState(null);


  useEffect(() => {

    db.collection('users').doc(tweet.owner).get()
      .then((userSnapshot) => setUser(userSnapshot.data()))

  }, [tweet.owner])

  if(user){

    return (
        <div className={styles.tweetCard}>
          <img className={styles.tweetUserImg} src={ user.photoURL } alt=""/>
          <div>
            <h2>
              <span className={styles.tweetUser}>{ user.username }</span> { tweet.tweet }
            </h2>
            <h6>{ new Date(tweet.timestamp).toString() }</h6>
          </div>
        </div>
    );

  }else{
    return null;
  }

};

export default TweetCard;
