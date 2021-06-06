import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './Dashboard.scss';
import BlogList from '../BlogList/BlogList';
import { displayApi } from '../../api';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

const Dashboard = () => {
  const [post, setPost] = useState([]);
  const history = useHistory();
  const { url } = useRouteMatch();
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
    history.push('/');
  };

  return (
    <div className="header">
      <nav className="navbar">
        <img src="https://img.icons8.com/ios-filled/100/ff005b/blogger.png" />
        <div className="right-nav">
          <img className="navicon" src="https://img.icons8.com/ios-filled/50/ff005b/user.png" />
          <Link to={`${url}/create`}>
            <img
              className="navicon"
              src="https://img.icons8.com/pastel-glyph/100/ff005b/create-new--v2.png"
              title="Write Blog"
            />
          </Link>
          <img
            className="navicon"
            onClick={signout}
            src="https://img.icons8.com/ios-filled/50/ff005b/exit.png"
            title="Sign Out"
          />
        </div>
      </nav>
      <div className="list">
        <BlogList handleDisplay={handleDisplay} post={post} />
      </div>
    </div>
  );
};

export default Dashboard;
