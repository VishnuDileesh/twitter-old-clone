import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import BannerComponent from '../../components/BannerComponent';

import BannerContentComponent from '../../components/BannerContentComponent';
import LoginFormComponent from '../../components/LoginFormComponent';

const LoginPage = () => {
  return (
    <div className="container">
      <HeaderComponent/>
      <BannerComponent>
        <BannerContentComponent linkTo='/join' linkText='Get Started - Join!'/>
        <LoginFormComponent/>
      </BannerComponent>
    </div>
  );
};

export default LoginPage;
