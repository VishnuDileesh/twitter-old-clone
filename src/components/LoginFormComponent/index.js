import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './index.module.css';

import { auth } from '../../services/firebase';
import { AuthContext } from '../../context/Auth';

const LoginFormComponent = () => {

  const { currentUser } = useContext(AuthContext);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
      .catch(() => setError('email or password entered is incorrect'));



    setEmail('');
    setPassword('');

  };

  if(currentUser){
    return <Redirect to='/'/>
  }


  return (
    <div>
      <h3>Please sign in</h3>


      <form className={styles.form}>
        
        { error && <p className="error">{error}</p> }

        <div className={styles.formField}>
          <label htmlFor="email">email address</label>
          <input className={styles.inputField} value={email} onChange={handleEmailChange} type="email" id="email"/>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">password</label>
          <input className={styles.inputField} autoComplete="off" value={password} onChange={handlePasswordChange} type="password" id="password"/>
        </div>
        <button className="btn" onClick={formSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default LoginFormComponent;
