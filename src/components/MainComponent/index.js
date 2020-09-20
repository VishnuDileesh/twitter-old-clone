import React from 'react';

import styles from './index.module.css';

import CreateTweetComponent from '../CreateTweetComponent/index';

const MainComponent = () => {
  return (
    <main className={styles.main}>
      <CreateTweetComponent/>
      {/* HomeTweetsComponent */}
    </main>
  );
};

export default MainComponent;
