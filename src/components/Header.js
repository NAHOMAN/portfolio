import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you have this CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Portfolio</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/aboutme" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
          <li><Link to="/contactme" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
