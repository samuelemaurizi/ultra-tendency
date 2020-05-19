import React from 'react';
import './Comments.css';

import Comment from './Comment.js';

const Comments = ({ comments }) => {
  return (
    <div className='comments'>
      <div className='comments__header-wrap'>
        <div className='container'>
          <div className='comments__header'>
            <h2>23 COMMENTS</h2>
            <div className='comments__header-links'>
              <button className='btn comments__btn active'>best</button>
              <button className='btn comments__btn'>newest</button>
              <button className='btn comments__btn'>oldest</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
