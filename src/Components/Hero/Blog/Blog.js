import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.scss';

const Blog = (props) => {
  return (
    <>
      <div className="blogcontainer">
        <div className="blog">
          <div className="cardContent">
            <p className="blogTitle">{props.title}</p>
            <Link to={`/${props.id}`}>
              <button className="read">READ</button>
            </Link>
          </div>
          <p className="blogDescription">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
