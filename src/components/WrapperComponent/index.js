import React from 'react';

import styles from './index.module.css';

import MainComponent from '../MainComponent';
import SideBarComponent from '../SideBarComponent';


const WrapperComponent = () => {
  return (
    <section className={styles.wrapper}>
      <MainComponent/>
      <SideBarComponent/>
    </section>
  );
};

export default WrapperComponent;
