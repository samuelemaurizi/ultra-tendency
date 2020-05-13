import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.png';

const Logo = () => {
  return (
    <Fragment>
      <Link to='/'>
        <img src={logo} alt='N logo' />
      </Link>
    </Fragment>
  );
};

export default Logo;
