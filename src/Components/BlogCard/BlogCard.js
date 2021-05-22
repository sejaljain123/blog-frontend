import React from 'react';
import './BlogCard.scss';
const BlogCard = (props) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.id}</p>
      </div>
    </>
  );
};

export default BlogCard;
