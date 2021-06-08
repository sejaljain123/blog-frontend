import React from 'react';
import './Footer.scss';
import logo from './sejal.jpg';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <span className="footer-text"> Made with 🤍 by</span>
        <a href="https://portfolio-sejal.vercel.app/" target="_blank">
          <img className="profile" src={logo} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
