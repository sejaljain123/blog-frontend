import React from 'react';
import { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import Footer from '../Footer/Footer';
import ClipLoader from 'react-spinners/ClipLoader';
import { displayApi } from '../../api';
import Blog from './Blog/Blog';
import Header from '../Header/Header';
import './Hero.scss';

const Hero = () => {
  const [post, setPost] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    handleDisplay();
  }, []);

  const handleDisplay = async () => {
    setloading(true);
    const data = await displayApi();
    setPost(data.posts);
    setloading(false);
  };
  if (loading)
    return (
      <div className="loader">
        <ClipLoader loading={loading} color="#ff005b" size={100} />{' '}
      </div>
    );

  return (
    <>
      <Header />
      <div className="Hero">
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
      </div>
      <Footer />
    </>
  );
};

export default Hero;
