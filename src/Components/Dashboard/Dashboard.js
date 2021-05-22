import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './Dashboard.scss';
import BlogCard from '../BlogCard/BlogCard';
import BlogList from '../BlogList/BlogList';

const Dashboard = ({ OnRouteChange }) => {
  const [post, setPost] = useState([]);

  useEffect(() => handleDisplay(), []);

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
        setPost(data.posts);
      });
  };
  const signout = () => {
    Cookies.remove('token');
    OnRouteChange('signin');
  };
  return (
    <div className="header">
      <nav className="navbar">
        <p className="create">Create Blog</p>
        <p className="signout" onClick={signout}>
          Sign Out
        </p>
      </nav>
      <BlogList post={post} />
    </div>
  );
};

export default Dashboard;
