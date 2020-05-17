import React from 'react';
import './Comments.css';

import Comment from './Comment.js';

const Comments = ({ comments }) => {
  return (
    <div className='comments'>
      {comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
