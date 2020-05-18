import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SocialLogin.css';

import { RouterContext } from '../../context/routing/routerContext';

const SocialLogin = ({ social }) => {
  const { onClick } = useContext(RouterContext);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));

  const onLink = (e) => {
    e.preventDefault();
    onClick(true);
    setLoggedIn(true);
    localStorage.setItem('loggeIn', true);
  };
  return (
    <div className='social-login'>
      {loggedIn ? (
        <Redirect to='/trending' />
      ) : (
        <Link to='/trending' className='social-btn' onClick={onLink}>
          <i className={'fab fa-' + social}></i>
          <span>Continue with {social}</span>
        </Link>
      )}
    </div>
  );
};

export default SocialLogin;
