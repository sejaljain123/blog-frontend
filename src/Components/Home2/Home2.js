import React from 'react';
import Register from '../Form/Register';
import './Home2.scss';
const Home2 = ({ onRouteChange }) => {
  return (
    <div className="Home2">
      <div className="text">
        <h2 className="welcome">Welcome</h2>
      </div>
      <div className="main">
        <div className="form">
          <h1>CREATE ACCOUNT</h1>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Home2;
