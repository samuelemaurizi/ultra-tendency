import React from 'react';
import './NotFound.css';

import logo from '../../img/logo-bs.png';

const NotFound = ({ history }) => {
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className='container not-found'>
      <button onClick={handleBack} className='btn not-found__btn'>
        <img src={logo} alt='logo' />
      </button>
    </div>
  );
};

export default NotFound;
