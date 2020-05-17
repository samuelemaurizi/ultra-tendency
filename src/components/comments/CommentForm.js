import React from 'react';

import Avatar from '../users/Avatar';

const CommentForm = () => {
  return (
    <div className='form-container'>
      <form>
        <input type='text' placeholder='Write something...' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
