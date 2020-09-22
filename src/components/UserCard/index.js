import React, { useState, useEffect, useContext } from 'react';

import styles from './index.module.css';

import { AuthContext } from '../../context/Auth';


const UserCard = () => {
  const { currentUser } = useContext(AuthContext);


  const [userPhoto, setUserPhoto] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');


  useEffect(() => {
    const { photoURL, displayName } = currentUser;
    
    setUserPhoto(photoURL);
    setUserDisplayName(displayName);
  }, [currentUser])





  return(

  <>
    <div className={styles.header}>
      <img src={userPhoto} alt="profile of user" className={styles.profilePic}/>
      <div className={styles.userInfo}>
        <h2>{userDisplayName}</h2>
        <h5>0 tweets</h5>
      </div>     
    </div>
    <div className={styles.userStatus}>
      <div className={styles.userStat}>
        <h4>0</h4>
        <h5>Following</h5>
      </div>
      <div className={styles.userStat}>
        <h4>0</h4>
        <h5>Followers</h5>
      </div>
      <div className={styles.userStat}>
        <h4>0</h4>
        <h5>Tweets</h5>
      </div>
    </div> 
  </>

  );
};

export default UserCard;
