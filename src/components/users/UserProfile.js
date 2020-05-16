import React from 'react';
import './UserProfile.css';

import Avatar from './Avatar';

const UserProfile = ({ username, userImg }) => {
  return (
    <div className='profile-container'>
      <div className='user-img'></div>
      <p>{username}</p>
    </div>
  );
};

export default UserProfile;
