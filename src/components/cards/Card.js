import React, { useContext } from 'react';
import './Card.css';

import Avatar from '../users/Avatar';

const Card = ({ category }) => {
  const { title, img, following, followers, username } = category;

  return (
    <div className='card'>
      <img src={img} alt='category' />
      <div className='card__content'>
        <div className='card__header'>
          <div className='card__title'>
            <h1>{title}</h1>
            <p>{followers} Followers</p>
          </div>
          <div className='card__icons'>
            {username.map((user, i) => (
              <div key={i} className='usersIcons'>
                <Avatar userImg={`https://picsum.photos/200?random=${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className={`btn card__btn ${following ? 'following' : ''}`}>
          {following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default Card;
