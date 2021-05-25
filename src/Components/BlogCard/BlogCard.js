import { displayApi, deleteApi } from '../../api';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import './BlogCard.scss';
const BlogCard = (props) => {
  const handleDelete = async () => {
    const data = await deleteApi(props);
    props.handleDisplay();
  };
  return (
    <>
      <div className="card">
        <div className="title">
          <h2>{props.title}</h2>
          <p>Date:{props.date}</p>
          <p>Author: {props.author}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
