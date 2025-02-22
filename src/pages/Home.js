import React from "react";
import Layout from "../components/layout/Layout/Layout";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Skills from "../components/sections/Skills/Skills";
import Projects from "../components/sections/Projects/Projects";
import Contact from "../components/sections/Contact/Contact";

const Home = () => {
  return (
    <Layout
      title="Nahom Nigussie - Frontend Developer"
      description="Welcome to my portfolio - I'm a Frontend Developer specializing in creating modern web applications"
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home; 