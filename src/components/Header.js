import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Portfolio</Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutme">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contactme">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
