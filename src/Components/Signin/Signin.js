import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { signinApi } from '../../api';

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
  const handleSignIn = async (e) => {
    e.preventDefault();
    const data = await signinApi(signinEmail, signinPassword);
    const signin = await data.json();

    if ((signin.success = true)) {
      setState(signin.user);
      OnRouteChange('home');
    } else {
      alert('Invalid Email or Password');
    }
    console.log(signin);
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
              <div className="wrap">
                <button onClick={handleSignIn} className="button" type="submit">
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
