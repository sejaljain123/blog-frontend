import React from 'react';
import Cookies from 'js-cookie';
import './Dashboard.scss';
const Dashboard = ({ OnRouteChange }) => {
  const handleDisplay = () => {
    fetch('http://localhost:5000/blog/display', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="header">
      <button onClick={handleDisplay}>Display Blogs</button>
      <nav className="navbar">
        <p className="create">Create Blog</p>
        <p
          className="signout"
          onClick={() => {
            OnRouteChange('signout');
          }}
        >
          Sign Out
        </p>
      </nav>
    </div>
  );
};

export default Dashboard;
