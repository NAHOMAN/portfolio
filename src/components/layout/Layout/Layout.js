import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet";
import './Layout.css';

const Layout = ({ children, title, description }) => {
  return (
    <div className="layout">
      <Helmet>
        <title>{title || "Nahom Nigussie - Frontend Developer"}</title>
        <meta 
          name="description" 
          content={description || "Portfolio of Nahom Nigussie - Frontend Developer specializing in React and modern web technologies"} 
        />
        <meta
          name="keywords"
          content="frontend developer, react developer, web development, javascript, portfolio"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout; 