import React, {useState} from 'react';

import styles from './index.module.css';

import { auth } from '../../services/firebase';

const LoginFormComponent = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => console.log(error))
  };


  return (
    <div>
      <h3>Please sign in</h3>

      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="email">email address</label>
          <input className={styles.inputField} value={email} onChange={handleEmailChange} type="email" id="email"/>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">password</label>
          <input className={styles.inputField} value={password} onChange={handlePasswordChange} type="password" id="password"/>
        </div>
        <button className="btn" onClick={formSubmit}>Sign in</button>
      </form>
    </div>
  );
};

export default LoginFormComponent;
