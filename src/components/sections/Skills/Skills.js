import React from 'react';
import { skills } from '../../../utils/data';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skillSet, index) => {
            const Icon = skillSet.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon">
                  <Icon />
                </div>
                <h3>{skillSet.category}</h3>
                <ul>
                  {skillSet.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills; 