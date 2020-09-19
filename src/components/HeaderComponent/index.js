import React from 'react';

import logo from '../../assets/images/logo.png';
import './index.css';

const HeaderComponent = () => {
  return(
    <header>
      <img class="logo" src={logo} alt="twitter old logo"/>
      <nav>
        <ul>
          <li><a href="https://github.com">Home</a></li>
          <li><a href="https://github.com">Profile</a></li>
          <li><a href="https://github.com">Find People</a></li>
          <li><a href="https://github.com">Settings</a></li>
          <li><a href="https://github.com">Help</a></li>
          <li><a href="https://github.com">Sign out</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
