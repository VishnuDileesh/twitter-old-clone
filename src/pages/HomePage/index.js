import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import WrapperComponent from '../../components/WrapperComponent';

const HomePage = () => {
  return (
    <div className="container">
      <HeaderComponent/>
      <WrapperComponent/>
      {/* FooterComponent */}
    </div>
  );
};

export default HomePage;
