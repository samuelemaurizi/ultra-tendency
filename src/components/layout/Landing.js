import React from 'react';
import './Landing.css';

import Login from '../auth/Login';
import logo from '../../img/logo.png';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='landing__content'>
          <div className='landing__content-header'>
            <img src={logo} alt='N logo' />
            <h1>Welcome</h1>
            <p>Please create an account to continue!</p>
          </div>
          <div className='landing__content-auth'>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
