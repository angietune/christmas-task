import React from 'react';
import github from '../../../assets/svg/github.svg';
import rs from '../../../assets/svg/rss.svg';
import './Footer.scss';

const Footer = function () {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <a href="https://github.com/angietune">
          <img className="github" src={github} alt="github" />
        </a>
        <a href="https://rollingscopes.com">
          <img className="rss" src={rs} alt="rss" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
