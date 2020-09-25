import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import LogoComponent from '../../components/LogoComponent';
import MenuComponent from '../../components/MenuComponent';
import WrapperComponent from '../../components/WrapperComponent';


const HomePage = () => {
  return (
    <div className="container">
      <HeaderComponent>
        <LogoComponent/>
        <MenuComponent/>
      </HeaderComponent>
      <WrapperComponent/>
      {/* FooterComponent */}
    </div>
  );
};

export default HomePage;
