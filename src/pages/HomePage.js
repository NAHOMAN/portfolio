import React from "react"; 
import { Link } from "react-router-dom";
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
          <a href="/path-to-your-cv.pdf" download className="start-button">
            Download CV
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Have questions or want to collaborate? Reach out to me!</p>
        <Link to="/contactme" className="button">Email Me</Link>
      </section>
    </div>
  );
};

export default HomePage;
