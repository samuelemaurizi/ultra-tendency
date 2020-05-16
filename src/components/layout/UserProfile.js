import React from 'react';
import './UserProfile.css';

const UserProfile = ({ username }) => {
  return (
    <div className='profile-container'>
      <div className='user-img'></div>
      <p>{username}</p>
    </div>
  );
};

export default UserProfile;
