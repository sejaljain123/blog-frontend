import Cookies from 'js-cookie';

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
  return await data.json();
};
export const createApi = async (blogtitle, blogdescription, blogcontent) => {
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
  return await data.json();
};

export const detailApi = async (props) => {
  const data = await fetch(`http://localhost:5000/blog/myblog/${props.id}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json();
};
export const verifyApi = async () => {
  const data = await fetch(`http://localhost:5000/verify`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json();
};
export const userBlogApi = async () => {
  const data = await fetch(`http://localhost:5000/blog/myblogs`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return await data.json();
};
export const updateApi = async (props) => {
  const data = await fetch(`http://localhost:5000/blog/update/${props.id}`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: props.blogtitle,
      description: props.blogdescription,
      content: props.blogcontent,
    }),
  });
  return await data.json();
};
