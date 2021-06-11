import React from 'react';
import './Signin.scss';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { signinApi } from '../../api';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../Header/Header';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [signinEmail, setsigninEmail] = useState('');
  const [signinPassword, setsigninPassword] = useState('');
  const history = useHistory();

  const updateEmail = (e) => {
    setsigninEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setsigninPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    if (!signinPassword || !signinEmail) {
      toast.dark('Enter Email and Password', {
        position: 'top-right',
        autoClose: 100000,
      });
    } else {
      e.preventDefault();
      const data = await signinApi(signinEmail, signinPassword);
      if (data.success === true) {
        Cookies.set('token', data.token);
        history.push('/dashboard');
      }
      if (data.success === false) {
        toast.dark('Wrong Credentials');
        setsigninEmail('');
        setsigninPassword('');
      }
    }
  };

  if (Cookies.get('token')) return <Redirect to="/dashboard"></Redirect>;

  return (
    <div className="signincontainer">
      <Header />
      <div className="Home">
        <div className="form">
          <h1 className="signin">SIGN IN</h1>
          <div className="container">
            <form>
              <input
                className="input"
                type="email"
                name="email"
                value={signinEmail}
                placeholder="Email"
                onChange={updateEmail}
              />

              <input
                className="input"
                type="password"
                name="password"
                value={signinPassword}
                placeholder="Password"
                onChange={updatePassword}
              />

              <button onClick={handleSignIn} className="button" type="submit">
                Submit
              </button>
              <ToastContainer position="top-right" autoClose={1000} />
            </form>
          </div>
        </div>
        <div className="main">
          <h1 className="hello">HELLO!</h1>
          <p className="message">Love Writing Blogs?</p>
          <p className="text">Register Here!</p>
          <Link to="/register">
            <button className="signup" type="submit">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
