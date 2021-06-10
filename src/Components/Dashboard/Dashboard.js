import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import BlogList from '../BlogList/BlogList';
import { userBlogApi } from '../../api';
import DasHeader from './DasHeader/DasHeader';

const Dashboard = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    handleDisplay();
  }, []);

  const handleDisplay = async () => {
    const data = await userBlogApi();
    setPost(data.posts);
  };

  return (
    <div>
      <DasHeader />
      <div className="dashlist">
        <BlogList handleDisplay={handleDisplay} post={post} />
      </div>
    </div>
  );
};

export default Dashboard;
