import React from 'react';
import './Register.css';

import Logo from './Logo';
import Login from '../auth/Signup';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='container'>
        <div className='landing__content'>
          <div className='landing__content-header'>
            <Logo />
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
