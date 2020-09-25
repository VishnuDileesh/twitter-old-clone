import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './index.module.css';

import { auth, db } from '../../services/firebase';

const redEgg = 'assets/images/redegg.jpg';
const greenEgg = 'assets/images/greenegg.jpg';
const blueEgg = 'assets/images/blueegg.jpg';
const orangeEgg = 'assets/images/orangeegg.jpg';
const purpleEgg = 'assets/images/purpleegg.jpg';

const profileEggs = [
  redEgg,
  greenEgg,
  blueEgg,
  orangeEgg,
  purpleEgg
]


const JoinFormComponent = () => {

  let history = useHistory();

  const [photoURL, setPhotoURL] = useState('');


  useEffect(() => {
    setPhotoURL(profileEggs[Math.random() * profileEggs.length | 0]);
  }, [])



  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const formSubmit = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {

        auth.currentUser.updateProfile({displayName: username, photoURL})
          .then(() => {
            db.collection('users').doc(user.user.uid).set({
              username,
              email,
              photoURL
            })
            .then(() => {
              history.push('/');
            });

          })
        

      })
      .catch((error) => setError(error.message));


  }


  return (
    <div>
      <h3>Please Sign up</h3>

      <form className={styles.form}>

        { error && <p className="error">{error}</p> }

        <div className={styles.formField}>
          <label htmlFor="username">username</label>
          <input type="text" className={styles.inputField} value={username} onChange={event => setUsername(event.target.value)}/>
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">email address</label>
          <input type="email" className={styles.inputField} value={email} onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">password</label>
          <input type="password" autoComplete="off" className={styles.inputField} value={password} onChange={event => setPassword(event.target.value)}/>
        </div>
        <button className="btn" onClick={formSubmit}>Sign up</button>
      </form>
    </div>
  );
};

export default JoinFormComponent;
