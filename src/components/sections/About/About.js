import React from 'react';
import { personalInfo } from '../../../utils/data';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="nahom-profile-image.jpg" alt={personalInfo.name} />
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              Hello! I'm {personalInfo.name}, a passionate Frontend Developer based in {personalInfo.location}. 
              My journey into web development began when I discovered my love for
              crafting user-friendly and visually appealing websites.
            </p>
            <p>
            As a recent Software Engineering graduate from ALX,
            I have been honing my skills in building responsive and dynamic web applications.
            I thrive on creating seamless digital experiences and enjoy collaborating with like-minded individuals 
            to bring ideas to life. My goal is to develop beautiful, functional, and impactful web solutions that enhance user interactions.
            </p>
            <p>
              {personalInfo.bio}
              Let’s connect and build something amazing together! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 