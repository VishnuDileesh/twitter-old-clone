import React from 'react';

import './index.css';

import MainComponent from '../MainComponent';
import SideBarComponent from '../SideBarComponent';


const WrapperComponent = () => {
  return (
    <section className="wrapper">
      <MainComponent/>
      <SideBarComponent/>
    </section>
  );
};

export default WrapperComponent;
