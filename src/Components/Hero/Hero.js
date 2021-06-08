import React from 'react';
import { useState, useEffect } from 'react';
import Particles from 'react-particles-js';

import { Link } from 'react-router-dom';
import { displayApi } from '../../api';
import Blog from './Blog/Blog';
import title from './Readit.png';
import './Hero.scss';
const Hero = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    handleDisplay();
  }, []);
  const handleDisplay = async () => {
    const data = await displayApi();
    const blog = await data.json();
    setPost(blog.posts);
    console.log(blog);
  };
  return (
    <>
      <div className="Hero">
        <nav className="header">
          {/* <span className="name"> READIT</span> */}
          <img src={title} />
          <div className="auth">
            <Link to="/signin">
              <p className="signin"> SignIn</p>
            </Link>
            <Link to="/register">
              <p className="register">Register</p>
            </Link>
          </div>
        </nav>
        <div className="blogList">
          {post.map((blog, i) => (
            <Blog
              key={i}
              id={post[i]._id}
              title={post[i].title}
              description={post[i].description}
              date={post[i].created_at}
            />
          ))}
        </div>
        <Particles
          className="particles-js"
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: '#ff6e6c',
              },
              opacity: {
                value: 1,
                anim: {
                  enable: true,
                },
              },
              size: {
                value: 6,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 0.5,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Hero;
