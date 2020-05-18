import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

import { UserContext } from '../../context/user/userContext';
import logo from '../../img/logo-s.png';
import UserProfile from '../users/UserProfile';

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div className='nav'>
      <div className='nav-user-wrap'>
        <div className='container'>
          <div className='nav-user'>
            <div className='nav-user__links'>
              <Link to='/trending' className='nav__logo'>
                <img src={logo} alt='logo' />
              </Link>
              <Link to='/channels' className='active'>
                <i className='fas fa-th-large'></i>
                channels
              </Link>
              <Link to='/bookmarks'>
                <i className='fas fa-bookmark'></i>
                bookmarks
              </Link>
              <Link to='/overviw'>
                <i className='fas fa-chart-pie'></i>
                overview
              </Link>
              <Link to='/widgets'>
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
            <NavLink activeClassName='active-link' to='/trending'>
              Trending
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              For you
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Cooking
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Nature
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Science
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Travel
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Climate
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              Music
            </NavLink>
            <NavLink activeClassName='active-link' to='/login'>
              People
            </NavLink>
          </div>
          <NavLink
            activeClassName='active-link'
            to='/explore'
            className='btn nav__links-btn'
          >
            Explore
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
