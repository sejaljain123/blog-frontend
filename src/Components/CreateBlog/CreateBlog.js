import React from 'react';
import { useState } from 'react';
import './CreateBlog.scss';

const CreateBlog = ({ OnRouteChange }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [content, setContent] = useState(null);
  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };
  const updateContent = (e) => {
    setContent(e.target.value);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    OnRouteChange('home');
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
            <div class="wrap">
              <button className="button" onClicktype="submit">
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
