import React from 'react';
import title from './Readit.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>
      <nav className="header">
        <img src={title} alt="title" />
        <div className="auth">
          <Link className="homebtn" to="/">
            Home
          </Link>
          <Link to="/signin" className="homebtn">
            SIGN IN
          </Link>
          <Link to="/register" className="homebtn">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
