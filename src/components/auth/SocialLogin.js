import React from 'react';
import { Link } from 'react-router-dom';
import './SocialLogin.css';

const SocialLogin = ({ social }) => {
  return (
    <Link to='/trending' className='social-btn'>
      <i className={'fab fa-' + social}></i>
      <span>Continue with {social}</span>
    </Link>
  );
};

export default SocialLogin;
