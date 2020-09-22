import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import BannerComponent from '../../components/BannerComponent';
import BannerContentComponent from '../../components/BannerContentComponent';
import JoinFormComponent from '../../components/JoinFormComponent';

const JoinPage = () => {
  return (
    <div className="container">
      <HeaderComponent/>
      <BannerComponent>
        <BannerContentComponent linkTo='login' linkText='Get Started - Sign in!'/>
        <JoinFormComponent/>      
      </BannerComponent>
    </div>
  );
};

export default JoinPage;
