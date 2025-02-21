import React from "react"; 
import { Helmet } from "react-helmet";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* SEO Metadata */}
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="My Portfolio." />
        <meta
          name="keywords"
          content="trading, market insights, trading blog, investment, trading tips"
        />
      </Helmet>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Hello, my name is</h2>
          <h3>Nahom Nigussie Girmay.</h3>
          <p>I'm a Frontend Developer.</p>
           {/* Social Links */}
           <div className="social-links">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook"></i> Facebook
            </a>
            <a href="https://www.linkedin.com/in/nahom" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-github"></i> GitHub
            </a>
          </div>
          <a href="/path-to-your-cv.pdf" download className="start-button">
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
