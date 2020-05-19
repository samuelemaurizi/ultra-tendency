import React, { Fragment, useContext } from 'react';

import { UsersContext } from '../../context/users/usersContext';
import { UserContext } from '../../context/user/userContext';
import TrendingContent from './TrendingContent';
import Comments from '../comments/Comments';
import CommentForm from '../comments/CommentForm';

const Story = () => {
  const [users] = useContext(UsersContext);
  const [user] = useContext(UserContext);

  return (
    <Fragment>
      <TrendingContent />
      <Comments comments={users} />
      <CommentForm user={user} />
    </Fragment>
  );
};

export default Story;
