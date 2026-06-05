import profileImg from '../assets/profileee.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Who I Am</p>
        <div className="about-grid">
          <div className="about-avatar-wrap reveal">
            <div className="about-avatar-frame">
              <img 
                src={profileImg} 
                alt="Paul Japhet Cabusas" 
                className="about-avatar-img" 
              />
            </div>
            <div className="about-deco"></div>
            <div className="about-deco2"></div>
          </div>
          <div className="about-content reveal">
            <h2 className="section-title">Crafting digital<br /><span>experiences</span> with purpose.</h2>
            <p className="body-text">
              Hi, I'm <strong>Paul Japhet Cabusas</strong> — an IT student and aspiring developer based in the Philippines with a passion for building functional, elegant, and user-centric applications.
            </p>
            <p className="body-text">
              I thrive at the crossroads of <strong>logic and creativity</strong>. Whether it's architecting a backend system in Laravel, designing a responsive interface, or exploring algorithms in Python — I approach every challenge with curiosity and precision.
            </p>
            <p className="body-text">
              When I'm not coding, I'm exploring emerging technologies, contributing to team projects, and constantly pushing my limits to become a well-rounded developer.
            </p>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-num">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">8+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-card">
                <div className="stat-num">∞</div>
                <div className="stat-label">Curiosity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
