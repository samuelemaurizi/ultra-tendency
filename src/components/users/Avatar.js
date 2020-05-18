import React from 'react';
import './Avatar.css';

const Avatar = ({ userImg }) => {
  return (
    <div className='avatar'>
      <img className='avatar__img' src={userImg} alt='user avatar' />
    </div>
  );
};

export default Avatar;
