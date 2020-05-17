import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { UserContext } from '../../context/user/userContext';
import Logo from './Logo';
import UserProfile from '../users/UserProfile';

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

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
              <UserProfile user={user} />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='nav__links'>
          <div className='nav__links-categories'>
            <Link to='/trending' className='active-link'>
              Trending
            </Link>
            <Link to='/foryou'>For you</Link>
            <Link to='/cooking'>Cooking</Link>
            <Link to='/nature'>Nature</Link>
            <Link to='/science'>Science</Link>
            <Link to='/travel'>Travel</Link>
            <Link to='/climate'>Climate</Link>
            <Link to='/music'>Music</Link>
            <Link to='/people'>People</Link>
          </div>
          <Link to='/explore' className='btn nav__links-btn'>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
