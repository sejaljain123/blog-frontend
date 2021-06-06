import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { detailApi } from '../../api';
import { MdPreviewer } from 'react-markdown-previewer';

const BlogDetail = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    handleDetail();
  }, []);

  const handleDetail = async () => {
    const data = await detailApi({ id: id });
    setTitle(data.posts.title);
    setDescription(data.posts.description);
    setContent(data.posts.content);
    setDate(data.posts.created_at);
    setAuthor(data.posts.created_by.name);
    console.log(data.posts);
  };

  return (
    <div>
      <h1>Title:{title}</h1>
      <h2>Date: {date}</h2>
      <p>{description}</p>
      <MdPreviewer md={content}></MdPreviewer>
      <h3>Author:{author}</h3>
    </div>
  );
};

export default BlogDetail;
