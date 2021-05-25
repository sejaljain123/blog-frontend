import React from 'react';
import { useState } from 'react';
import './CreateBlog.scss';
import Cookies from 'js-cookie';
import { createApi } from '../../api';
const CreateBlog = ({ OnRouteChange }) => {
  const [blogtitle, setTitle] = useState(null);
  const [blogdescription, setDescription] = useState(null);
  const [blogcontent, setContent] = useState(null);
  const [blog, setBlog] = useState([]);
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updateContent = (e) => {
    setContent(e.target.value);
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    const data = await createApi(blogtitle, blogdescription, blogcontent);
    const posts = await data.json();
    console.log(posts);
    setBlog(posts.blog);
  };

  return (
    <>
      <nav className="nav">
        <img
          className="back"
          onClick={() => OnRouteChange('home')}
          src="https://img.icons8.com/plasticine/100/000000/circled-left.png"
          title="Back"
        />
      </nav>
      <div className="big">
        <h1 className="heading">Write Your Blog Here!</h1>
        <div className="blog">
          <form onSubmit={handleCreate}>
            <div className="box">
              <label>Title</label>
              <input className="placeholder" name="name" onChange={updateTitle} />
            </div>
            <div className="box">
              <label>Description</label>

              <textarea
                className="placeholder"
                onChange={updateDescription}
                style={{ height: '90px' }}
              />
            </div>
            <div className="box">
              <label>Content</label>

              <textarea
                className="placeholder"
                type="text"
                onChange={updateContent}
                style={{ height: '200px' }}
              ></textarea>
            </div>
            <div className="wrap">
              <button className="button" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
