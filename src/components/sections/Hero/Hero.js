import React from 'react';
import { personalInfo } from '../../../utils/data';
import Button from '../../shared/Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>
            <span className="greeting">Hi, I'm</span>
            <span className="name">{personalInfo.name}</span>
            <span className="title">{personalInfo.title}</span>
          </h1>
          <p className="description">
            I create responsive and user-friendly web experiences 
            with modern technologies and best practices.
          </p>
          <div className="hero-buttons">
            <Button href="#projects" variant="primary">View Projects</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 