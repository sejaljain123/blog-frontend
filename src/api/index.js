import Cookies from 'js-cookie';
import { useState } from 'react';

export const displayApi = async () => {
  const data = await fetch('http://localhost:5000/blog/display', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });

  return data;
};
export const signinApi = async (signinEmail, signinPassword) => {
  const data = await fetch('http://localhost:5000/signin', {
    method: 'post',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: signinEmail,
      password: signinPassword,
    }),
  });

  return data;
};
export const registerApi = async (regName, regEmail, regPassword) => {
  const data = await fetch('http://localhost:5000/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: regName,
      email: regEmail,
      password: regPassword,
    }),
  });
  return data;
};
export const deleteApi = async (props) => {
  const data = await fetch(`http://localhost:5000/blog/delete/${props.id}`, {
    method: 'delete',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return data;
};
export const createApi = async (blogtitle, blogcontent, blogdescription) => {
  const data = await fetch('http://localhost:5000/blog/create', {
    method: 'post',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: blogtitle,
      description: blogdescription,
      content: blogcontent,
    }),
  });
  return data;
};

export const detailApi = async () => {
  const data = await fetch('http://localhost:5000/blog/display/:id', {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });

  return data;
};
