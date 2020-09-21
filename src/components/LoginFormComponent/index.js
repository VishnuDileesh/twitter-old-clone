import React from 'react';

import styles from './index.module.css';

const LoginFormComponent = () => {
  return (
    <div>
      <h3>Please sign in</h3>

      <form className={styles.form}>
        <div className={styles.formField}>
          <label htmlFor="email">email address</label>
          <input className={styles.inputField} type="email" id="email"/>
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">password</label>
          <input className={styles.inputField} type="password" id="password"/>
        </div>
        <button className="btn">Sign in</button>
      </form>
    </div>
  );
};

export default LoginFormComponent;
