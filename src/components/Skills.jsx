import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label reveal">Technical Toolkit</p>
        <h2 className="section-title reveal">Technologies I <span>work with</span></h2>
        <div className="skills-grid">
          {skills.map((s, index) => (
            <div className="skill-card reveal" key={index}>
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
              <div className="skill-bar-wrap">
                <div className="skill-bar" data-level={s.level}></div>
              </div>
              <span className="skill-level">{s.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
