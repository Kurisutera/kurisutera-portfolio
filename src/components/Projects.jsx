import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label reveal">Selected Work</p>
        <h2 className="section-title reveal">Featured <span>Projects</span></h2>
        <div className="projects-grid" id="projectsGrid">
          {projects.map((p, index) => (
            <div className="project-card reveal" key={index}>
              <div className="project-preview">
                <span className="project-preview-icon">{p.icon}</span>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-stack">
                  {p.stack.map((t, idx) => (
                    <span key={idx}>{t}</span>
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
