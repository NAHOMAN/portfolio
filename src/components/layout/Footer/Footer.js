import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks, navLinks } from '../../../utils/data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.bio}</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <nav className="footer-nav">
              {navLinks.map((link, index) => (
                <a key={index} href={link.href}>{link.title}</a>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <a href={`mailto:${personalInfo.email}`} className="footer-contact">
              <FaEnvelope /> {personalInfo.email}
            </a>
            <div className="footer-social">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> by {personalInfo.name} © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 