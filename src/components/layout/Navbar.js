import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from './Logo';
import UserProfile from './UserProfile';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-user-wrap'>
        <div className='container'>
          <div className='nav-user'>
            <div className='nav-user__links'>
              <div>
                <Logo />
              </div>
              <Link to='/channels' className='active'>
                <i className='fas fa-th-large'></i>
                channels
              </Link>
              <Link to='/channels'>
                <i className='fas fa-bookmark'></i>
                bookmarks
              </Link>
              <Link to='/channels'>
                <i className='fas fa-chart-pie'></i>
                overview
              </Link>
              <Link to='/channels'>
                <i className='fas fa-puzzle-piece'></i>
                widgets
              </Link>
            </div>
            <div className='nav-user__right'>
              <input type='text' />
              <i className='fas fa-search'></i>
              <UserProfile username='John Doe' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='nav__links'>
          <h3>main links</h3>
        </div>
        <div className='nav__explore'>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
