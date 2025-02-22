import React from 'react';
import { personalInfo } from '../../../utils/data';
import Button from '../../shared/Button/Button';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              I'm currently open to new opportunities and would love to hear about your project. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="contact-info">
            <div className="contact-method">
              <a href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="contact-buttons">
            <Button 
              href={`mailto:${personalInfo.email}`}
              variant="primary"
            >
              Send Message
            </Button>
            <Button 
              href="/Nahom-Resume.pdf"
              variant="secondary"
              download
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 