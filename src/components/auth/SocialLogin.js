import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './SocialLogin.css';

const SocialLogin = ({ social }) => {
  return (
    <Fragment>
      <Link to='/story' className='social-btn'>
        <i className={'fab fa-' + social}></i>
        Continue with {social}
      </Link>
    </Fragment>
  );
};

export default SocialLogin;
