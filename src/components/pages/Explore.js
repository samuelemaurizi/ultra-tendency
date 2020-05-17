import React, { useContext } from 'react';

import { CommentsContext } from '../../context/comments/commentsContext';

const Explore = () => {
  const [comments, setComments] = useContext(CommentsContext);

  return (
    <div>
      <h1>Explore</h1>
      <ul>
        {comments.map((comment, i) => (
          <h3 key={i}>{comment.comment}</h3>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
