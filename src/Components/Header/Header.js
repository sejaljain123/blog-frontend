import React from 'react';
import title from './Readit.png';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>
      <nav className="header">
        <img src={title} />
        <div className="auth">
          <Link to="/signin">
            <p className="signin"> SignIn</p>
          </Link>
          <Link to="/register">
            <p className="register">Register</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
