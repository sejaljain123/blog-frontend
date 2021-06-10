import React from 'react';
import { detailApi, updateApi } from '../../api';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { toast, ToastContainer } from 'react-toastify';

const BlogUpdate = () => {
  const { id } = useParams();
  const [blogtitle, setTitle] = useState('');
  const [blogdescription, setDescription] = useState('');
  const [blogcontent, setContent] = useState('');
  const history = useHistory();

  useEffect(
    () => {
      handleOldData();
    },
    // eslint-disable-next-line
    []
  );

  const handleOldData = async () => {
    const data = await detailApi({ id });
    setTitle(data.posts.title);
    setDescription(data.posts.description);
    setContent(data.posts.content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateApi({ id, blogtitle, blogdescription, blogcontent });
    toast.success('Updated Successfully');
    history.push('/dashboard');
  };

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <nav className="nav">
        <Link to="/dashboard">
          <img
            className="back"
            src="https://img.icons8.com/plasticine/100/000000/circled-left.png"
            title="Back"
            alt="back"
          />
        </Link>
      </nav>
      <div className="big">
        <div className="blog">
          <div className="box">
            <input
              placeholder="Enter Title..."
              className="placeholder"
              name="name"
              value={blogtitle}
              onChange={updateTitle}
            />
          </div>
          <div className="box">
            <textarea
              placeholder="Enter Description...."
              className="placeholder"
              value={blogdescription}
              onChange={updateDescription}
              style={{ height: '90px' }}
            />
          </div>
          <div className="box">
            <MDEditor
              textareaProps={{
                placeholder: 'Write Your Blog Here',
              }}
              height={500}
              width={500}
              value={blogcontent}
              onChange={setContent}
            />
          </div>
          <div className="wrap">
            <button onClick={handleUpdate} className="button" type="submit">
              Update
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogUpdate;
