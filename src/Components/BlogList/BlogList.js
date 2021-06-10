import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.scss';

const BlogList = ({ post, handleDisplay }) => {
  return (
    <>
      <div className="blogListcontainer">
        {post.map((blog, i) => (
          <BlogCard
            handleDisplay={handleDisplay}
            key={i}
            id={post[i]._id}
            title={post[i].title}
            date={post[i].created_at}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
