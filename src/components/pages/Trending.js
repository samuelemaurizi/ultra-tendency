import React, { Fragment, useContext } from 'react';
import './Trending.css';

import { UsersContext } from '../../context/users/usersContext';
import { UserContext } from '../../context/user/userContext';
import Navbar from '../layout/Navbar';
import Comments from '../comments/Comments';
import CommentForm from '../comments/CommentForm';

const Story = () => {
  const [users] = useContext(UsersContext);
  const [user] = useContext(UserContext);

  return (
    <div>
      {/* <Navbar /> */}

      <Fragment>
        <main>
          <header className='header'>
            <div className='container'>
              <div className='header__title'>
                <div className='header__title-text'>
                  <h1>
                    Fresh wave of climate strikes takes place around the world
                  </h1>
                  <div className='header__title-text-icons'>
                    <span>
                      <i className='fas fa-rss'></i>
                      The Guardian
                    </span>
                    <span>
                      <i className='far fa-calendar'></i>
                      Today
                    </span>
                    <p className='tag'>Nature</p>
                  </div>
                </div>
                <div className='header__title-icons'>
                  <i className='fas fa-comment-alt'></i>
                  <i className='fas fa-bookmark'></i>
                  <i className='fas fa-share'></i>
                </div>
              </div>
            </div>
          </header>

          <div className='content'>
            <div className='content__text container'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                possimus asperiores totam cupiditate rem, labore eligendi
                corporis fugit incidunt laborum quaerat voluptates inventore,
                vel dignissimos veritatis iste esse reprehenderit eius alias
                deleniti! Voluptates velit dolor fuga minima aliquid.
                Consectetur, ex?
              </p>
            </div>
            <div className='content__grid'>
              <div className='content__grid-img-one'></div>
              <div className='content__grid-text'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam reiciendis, quibusdam doloribus maxime ut itaque
                  provident, quod enim adipisci pariatur repellat accusantium
                  ipsum non magni?
                </p>
                <cite>Noaa</cite>
              </div>
              <div className='content__grid-img-two'></div>
              <div className='content__grid-text'>
                <h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  mollitia deserunt quibusdam voluptatibus dignissimos sapiente?
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam reiciendis, quibusdam doloribus maxime ut itaque
                  provident, quod enim adipisci pariatur repellat accusantium
                  ipsum non magni?
                </p>
              </div>
            </div>
            <div className='content__text container'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                rerum labore placeat, illum dolore numquam quasi voluptatibus
                in? Quaerat tempora aut non voluptas dolor quam cupiditate
                perferendis qui illum. Tempore, quam praesentium assumenda quos
                ipsa, nam cupiditate magnam ad facilis repellendus
                necessitatibus veniam eius iure inventore ut illo eum molestiae
                ex! Beatae iure adipisci deserunt fugiat? Dolor porro fugiat ut!
              </p>
            </div>
            <div className='content__video'>
              <i className='fas fa-play'></i>
            </div>
          </div>

          <div className='comments-wrap'>
            <Comments comments={users} />
            <CommentForm user={user} />
          </div>
        </main>
      </Fragment>
    </div>
  );
};

export default Story;
