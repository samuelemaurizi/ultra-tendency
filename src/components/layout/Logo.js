import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

import logo from '../../img/logo-bs.png';

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt='N logo' />
    </Link>
  );
};

export default Logo;
