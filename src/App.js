import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import HomePage from "./pages/HomePage";
import Aboutme from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe"; 

const App = () => {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;