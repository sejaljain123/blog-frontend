import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './BlogList.scss';

const BlogList = ({ post }) => {
  return (
    <>
      {post.map((blog, i) => (
        <BlogCard key={i} id={post[i].id} title={post[i].title} />
      ))}
    </>
  );
};

export default BlogList;
