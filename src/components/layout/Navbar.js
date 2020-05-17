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
              <Link to='/login' className='active'>
                <i className='fas fa-th-large'></i>
                channels
              </Link>
              <Link to='/login'>
                <i className='fas fa-bookmark'></i>
                bookmarks
              </Link>
              <Link to='/login'>
                <i className='fas fa-chart-pie'></i>
                overview
              </Link>
              <Link to='/login'>
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
            <Link to='/login'>For you</Link>
            <Link to='/login'>Cooking</Link>
            <Link to='/login'>Nature</Link>
            <Link to='/login'>Science</Link>
            <Link to='/login'>Travel</Link>
            <Link to='/login'>Climate</Link>
            <Link to='/login'>Music</Link>
            <Link to='/login'>People</Link>
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
