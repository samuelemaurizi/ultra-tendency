import React, { Fragment, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Signup.css';

import { RouterContext } from '../../context/routing/routerContext';
import SocialLogin from './SocialLogin';

const Login = () => {
  const { onClick } = useContext(RouterContext);

  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // const { email, password } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onClick(true);
    return <Redirect to='/trending' />;
  };

  return (
    <Fragment>
      <div className='social-login'>
        <SocialLogin social='facebook' />
        <SocialLogin social='google' />
      </div>
      <p className='intro-text'>or use email instead</p>
      <form className='form' onSubmit={onSubmit}>
        <div className='form__group'>
          <div className='email'>
            <i className='fas fa-envelope'></i>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              // value={email}
              // onChange={onChange}
              required
            />
          </div>
        </div>
        <div className='form__group'>
          <div className='password'>
            <i className='fas fa-lock'></i>
            <input
              type='password'
              placeholder='Password'
              name='password'
              // value={password}
              // onChange={onChange}
              minLength='6'
            />
          </div>
        </div>
        <input type='submit' className='form__btn' value='Sign Up' />
      </form>
      <p className='login-text'>
        Already have an acoount? <Link to='/login'>Login</Link>
      </p>
    </Fragment>
  );
};

export default Login;
