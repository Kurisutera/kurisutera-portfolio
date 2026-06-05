import React from 'react';
import { experiences } from '../data';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label reveal">My Journey</p>
        <h2 className="section-title reveal">Experience & <span>Milestones</span></h2>
        <div className="timeline" id="timeline">
          {experiences.map((e, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="tl-card">
                <div className="tl-period">{e.period}</div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-org">{e.org}</div>
                <div className="tl-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
