import React from 'react';
import logo from './Readit.png';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './DasHeader.scss';

const DasHeader = () => {
  const history = useHistory();
  const signout = () => {
    Cookies.remove('token');
    history.push('/signin');
  };

  return (
    <div>
      <nav className="Dasheader">
        <img src={logo} alt="logo" />
        <div className="navbtns">
          <Link to="/dashboard">
            <img
              className="dashnavicon"
              src="https://img.icons8.com/fluent-systems-regular/48/ffffff/dashboard-layout.png"
              title="Dashboard"
              height="50px"
              width="50px"
              alt="layout"
            />
          </Link>
          <Link to="/">
            <img
              className="dashnavicon"
              src="https://img.icons8.com/ios-filled/50/ffffff/home.png"
              title="Home"
              height="50px"
              width="50px"
              alt="home"
            />
          </Link>
          <Link to="/dashboard/create">
            <img
              className="dashnavicon"
              src="https://img.icons8.com/pastel-glyph/100/ffffff/create-new--v2.png"
              title="Write Blog"
              height="50px"
              width="50px"
              alt="create"
            />
          </Link>
          <img
            className="dashnavicon"
            onClick={signout}
            src="https://img.icons8.com/ios-filled/50/ffffff/exit.png"
            title="Sign Out"
            height="50px"
            width="50px"
            alt="exit"
          />
        </div>
      </nav>
    </div>
  );
};

export default DasHeader;
