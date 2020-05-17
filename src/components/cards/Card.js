import React, { useContext } from 'react';
import './Card.css';

import { UsersContext } from '../../context/users/usersContext';
import Avatar from '../users/Avatar';

const Card = ({ category }) => {
  const { title, img, following, followers, contact } = category;
  const [users, setUsers] = useContext(UsersContext);

  return (
    <div className='card'>
      <img src={img} alt='category' />
      <div className='card__body'>
        <h1>{title}</h1>
        <p>{followers} Followers</p>
        <button className={`btn card__btn ${following ? 'following' : ''}`}>
          {following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default Card;
