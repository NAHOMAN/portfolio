import React from 'react';
import { projects } from '../../../utils/data';
import Button from '../../shared/Button/Button';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <Button 
                      href={project.github} 
                      variant="ghost"
                      size="small"
                    >
                      View Code
                    </Button>
                    <Button 
                      href={project.demo} 
                      variant="primary"
                      size="small"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 