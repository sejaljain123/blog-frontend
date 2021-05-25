import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.scss';

const BlogList = ({ post, handleDisplay }) => {
  console.log(post);
  return (
    <>
      <div className="container">
        {post.map((blog, i) => (
          <BlogCard
            handleDisplay={handleDisplay}
            key={i}
            id={post[i]._id}
            title={post[i].title}
            date={post[i].created_at}
            author={post[i].created_by.name}
          />
        ))}
      </div>
    </>
  );
};

export default BlogList;
