import React from 'react';
import './CommentForm.css';

import Avatar from '../users/Avatar';

const CommentForm = ({ user }) => {
  return (
    <div className='form-container'>
      <Avatar userImg={user.image} />
      <form className='form-group'>
        <input type='text' placeholder='Write something...' />
        <button className='btn form-btn'>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;