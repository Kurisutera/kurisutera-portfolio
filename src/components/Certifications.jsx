import React, { useState } from 'react';
import { certificates } from '../data';
import Modal from './Modal';

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => {
    setActiveCert(cert);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label reveal">Continuous Learning</p>
        <h2 className="section-title reveal">My <span>Certifications</span></h2>
        <div className="projects-grid" id="certGrid">
          {certificates.map((cert, index) => (
            <div className="project-card reveal" key={index}>
              <div className="project-preview" style={{ height: '320px', padding: 0, overflow: 'hidden' }}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#0a0a0c' }} />
                ) : (
                  <span className="project-preview-icon" style={{ fontSize: '3rem', marginTop: '60px', display: 'block', textAlign: 'center' }}>{cert.icon}</span>
                )}
              </div>
              <div className="project-body">
                <h3 className="project-title">{cert.title}</h3>
                <div className="project-footer" style={{ marginTop: '1.5rem' }}>
                  <button 
                    className="btn-project primary" 
                    onClick={() => openModal(cert)}
                    style={{ width: '100%', cursor: 'none' }}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {activeCert && (
        <Modal 
          isOpen={modalOpen} 
          onClose={closeModal} 
          pdfUrl={activeCert.file} 
          title={activeCert.title} 
        />
      )}
    </section>
  );
};

export default Certifications;
