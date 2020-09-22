import React from 'react';

import styles from './index.module.css';

import UserCard from '../UserCard';

const SideBarComponent = () => {
  return (
    <article className={styles.sidebar}>
      <UserCard/>
    </article>
  );
};

export default SideBarComponent;
