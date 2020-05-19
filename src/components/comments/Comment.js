import React from 'react';
import './Comment.css';

import Avatar from '../users/Avatar';

const Comment = ({ comment }) => {
  const { image, name, text, like, date, liked } = comment;

  return (
    <div className='comment-container'>
      <div className='comment__avatar'>
        <Avatar userImg={image} />
      </div>
      <div className='comment__body'>
        <p className='comment__body-name'>{name}</p>
        <p className='comment__body-text'>{text}</p>
        <div className='comment__body-icons'>
          <span>
            <i
              className={liked === true ? 'fas fa-heart liked' : 'far fa-heart'}
            ></i>
            {like}
          </span>
          <span>
            <i className='far fa-calendar'></i>
            {date} days ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
