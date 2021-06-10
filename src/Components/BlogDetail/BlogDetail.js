import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { detailApi } from '../../api';
import { MdPreviewer } from 'react-markdown-previewer';
import DasHeader from '../Dashboard/DasHeader/DasHeader';
import './BlogDetail.scss';

const BlogDetail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    handleDetail();
  });

  const handleDetail = async () => {
    const data = await detailApi({ id: id });
    console.log(data.posts);
    setTitle(data.posts.title);
    setDescription(data.posts.description);
    setContent(data.posts.content);
    setDate(data.posts.created_at);
    setAuthor(data.posts.created_by.name);
  };

  return (
    <div>
      <DasHeader />
      <div className="detail">
        <div className="stylebox1">
          <h1 className="title">{title}</h1>
          <span className="author">By {author}</span>
        </div>

        <div className="content">
          <MdPreviewer md={content}></MdPreviewer>
        </div>
        <span className="content">Created At: {date}</span>
      </div>
    </div>
  );
};

export default BlogDetail;
