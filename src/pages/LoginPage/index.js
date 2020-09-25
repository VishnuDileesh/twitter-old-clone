import React from 'react';

import HeaderComponent from '../../components/HeaderComponent';
import LogoComponent from '../../components/LogoComponent';
import BannerComponent from '../../components/BannerComponent';
import BannerContentComponent from '../../components/BannerContentComponent';
import LoginFormComponent from '../../components/LoginFormComponent';

const LoginPage = () => {
  return (
    <div className="container">
      <HeaderComponent>
        <LogoComponent/>
      </HeaderComponent>
      <BannerComponent>
        <BannerContentComponent linkTo='/join' linkText='Get Started - Join!'/>
        <LoginFormComponent/>
      </BannerComponent>
    </div>
  );
};

export default LoginPage;
