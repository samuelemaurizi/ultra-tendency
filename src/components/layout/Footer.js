import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='container'>
      <div className='footer__content'>
        <div className='footer__links'>
          <Link to='/about'>About Us</Link>
          <Link to='/terms'>Terms and Conditions</Link>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <div className='footer__social'>
          <Link to='/facebook'>
            <i
              className='fab fa-facebook'
              style={{ color: 'var(--clr-gray-7)' }}
            ></i>
          </Link>
          <Link to='/twitter'>
            <i className='fab fa-twitter'></i>
          </Link>
          <Link to='/instagram'>
            <i className='fab fa-instagram'></i>
          </Link>
        </div>
        <div className='footer__copyright'>
          <p>
            <i className='far fa-copyright'></i> {year} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
