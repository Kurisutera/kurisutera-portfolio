import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="dot"></span>
            Available for opportunities
          </div>
          <h1 className="hero-name">
            Paul Japhet<br /><span className="grad">Cabusas.</span>
          </h1>
          <p className="hero-tagline">
            <em>Aspiring Developer & Creative Thinker</em> — building clean, purposeful experiences at the intersection of code and design.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
          <div className="hero-scroll">
            <span className="scroll-line"></span>
            scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
