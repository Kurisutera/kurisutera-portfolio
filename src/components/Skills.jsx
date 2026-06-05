import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label reveal">Technical Toolkit</p>
        <h2 className="section-title reveal">Technologies I <span>work with</span></h2>
        <div className="skills-grid">
          {skills.map((s, index) => {
            const Icon = s.icon;
            return (
              <div className="skill-card reveal" key={index}>
                <span className="skill-icon" style={{ color: s.color }}><Icon /></span>
                <span className="skill-name">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
