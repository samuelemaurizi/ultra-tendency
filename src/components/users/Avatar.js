import React from 'react';
import './Avatar.css';

const Avatar = ({ userImg }) => {
  // const fakeImg = 'https://loremflickr.com/320/240';

  return (
    <div className='avatar'>
      <img className='avatar__img' src={userImg} alt='user avatar' />
    </div>
  );
};

export default Avatar;
