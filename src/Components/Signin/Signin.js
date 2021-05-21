import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Signin = ({ OnRouteChange }) => {
  const [signinEmail, setsigninEmail] = useState(null);
  const [signinPassword, setsigninPassword] = useState(null);
  const [state, setState] = useState([]);
  const updateEmail = (e) => {
    setsigninEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setsigninPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user) {
          setState(user);
          Cookies.set('token', user.token, { expires: 1 });
          OnRouteChange('home');
        }
        console.log(user);
      });
  };
  return (
    <div className="Home">
      <div className="form">
        <h1>SIGN IN</h1>
        <div className="Form">
          <div className="container">
            <form>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={updateEmail}
              />
              <input
                className="input"
                type="text"
                name="password"
                placeholder="Password"
                onChange={updatePassword}
              />
              <div class="wrap">
                <button onClick={handleSubmit} className="button" onClicktype="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="main">
        <h1 className="hello">HELLO!</h1>
        <p className="message">Love Writing Blogs?</p>
        <p className="text">Register Here!</p>
        <button onClick={() => OnRouteChange('register')} className="signup" type="submit">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Signin;
