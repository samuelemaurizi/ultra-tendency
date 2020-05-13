import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='footer__links'>
        <Link to='/about'>About Us</Link>
        <Link to='/terms'>Terms and Conditions</Link>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='footer__social'>
        <Link to='https://www.facebook.com'>
          <i className='fab fa-facebook'></i>
        </Link>
        <Link to='https://twitter.com'>
          <i className='fab fa-twitter'></i>
        </Link>
        <Link to='https://www.instagram.com'>
          <i className='fab fa-instagram'></i>
        </Link>
      </div>
      <div className='footer__copyright'>
        <p>
          <i className='far fa-copyright'></i> {year} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
