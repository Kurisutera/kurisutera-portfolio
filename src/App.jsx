import React from 'react';
import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal';

import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Background />
      <Navbar />
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
