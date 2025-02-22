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
            <img src="/your-profile-image.jpg" alt={personalInfo.name} />
          </div>
          <div className="about-text">
            <h3>My Journey</h3>
            <p>
              Hello! I'm {personalInfo.name}, a passionate Frontend Developer based in {personalInfo.location}. 
              My journey in web development started when I discovered my love for 
              creating user-friendly and visually appealing websites.
            </p>
            <p>
              With 2 years of experience in the field, I've had the opportunity to 
              work on various exciting projects and collaborate with talented people 
              to create digital products for both business and consumer use.
            </p>
            <p>
              {personalInfo.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 