import Cookies from 'js-cookie';
import React from 'react';
import './BlogCard.scss';
const BlogCard = (props) => {
  const handleDelete = () => {
    fetch(`http://localhost:5000/blog/delete/${props.id}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => props.handleDisplay());
  };
  return (
    <>
      <div className="card">
        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.id}</p>
          <p>{props.created_by}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
