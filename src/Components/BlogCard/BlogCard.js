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

          <img
            onClick={handleDelete}
            src="https://img.icons8.com/wired/64/ffffff/trash.png"
            height="50px"
            width="50px"
          />
        </div>
      </div>
    </>
  );
};

export default BlogCard;