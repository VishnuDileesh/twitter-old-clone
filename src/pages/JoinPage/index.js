import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import BannerComponent from '../../components/BannerComponent';
import BannerContentComponent from '../../components/BannerContentComponent';

const JoinPage = () => {
  return (
    <div className="container">
      <HeaderComponent/>
      <BannerComponent>
        <BannerContentComponent linkTo='login' linkText='Get Started - Sign in!'/>
      </BannerComponent>
    </div>
  );
};

export default JoinPage;
