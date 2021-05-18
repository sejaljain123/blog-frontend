import React from 'react';
import './Home.scss';
import Signin from '../Form/Signin';
const Home = ({ OnRouteChange }) => {
  const onhandleSignup = () => {
    OnRouteChange('register');
  };
  return (
    <div className="Home">
      <div className="form">
        <h1>SIGN IN</h1>
        <Signin />
      </div>
      <div className="main">
        <h1 className="hello">HELLO!</h1>
        <p className="message">Love Writing Blogs?</p>
        <p className="text">Register Here!</p>
        <button onClick={onhandleSignup} className="signup" type="submit">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Home;
