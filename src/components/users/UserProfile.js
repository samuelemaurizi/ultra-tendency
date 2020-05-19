import React from 'react';
import './UserProfile.css';

import Avatar from './Avatar';

const UserProfile = ({ user }) => {
  return (
    <div className='profile-container'>
      <div>
        <Avatar userImg={user.image} />
      </div>
      <p>{user.name}</p>
    </div>
  );
};

export default UserProfile;
