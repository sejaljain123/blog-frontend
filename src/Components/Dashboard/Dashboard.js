import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './Dashboard.scss';
import BlogList from '../BlogList/BlogList';
import { displayApi } from '../../api';

const Dashboard = ({ OnRouteChange }) => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    handleDisplay();
  }, []);
  const handleDisplay = async () => {
    const data = await displayApi();
    const blog = await data.json();
    setPost(blog.posts);
    console.log(blog);
  };

  const signout = () => {
    Cookies.remove('token');
    OnRouteChange('signin');
  };

  return (
    <div className="header">
      <nav className="navbar">
        <img
          className="navicon"
          onClick={() => OnRouteChange('create')}
          src="https://img.icons8.com/pastel-glyph/100/ff005b/create-new--v2.png"
          title="Write Blog"
        />
        <img
          className="navicon"
          onClick={signout}
          src="https://img.icons8.com/ios-filled/50/ff005b/exit.png"
          title="Sign Out"
        />
      </nav>
      <div className="list">
        <BlogList handleDisplay={handleDisplay} post={post} />
      </div>
    </div>
  );
};

export default Dashboard;
