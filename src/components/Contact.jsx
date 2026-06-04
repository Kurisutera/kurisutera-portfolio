import React, { useState } from 'react';
import { contactLinks } from '../data';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send Message →');
  const [buttonStyle, setButtonStyle] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    setDisabled(true);

    setTimeout(() => {
      setButtonText('✓ Message Sent!');
      setButtonStyle({ background: 'linear-gradient(135deg, #22c55e, #16a34a)' });
      
      setTimeout(() => {
        setButtonText('Send Message →');
        setButtonStyle({});
        setDisabled(false);
        e.target.reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label reveal">Get In Touch</p>
        <h2 className="section-title reveal">Let's <span>connect</span>.</h2>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-info">
              <h3>Open to collaborations & opportunities.</h3>
              <p>Whether you have a project in mind, a question, or just want to say hello — my inbox is always open. I'll get back to you as soon as I can.</p>
            </div>
            <div className="contact-links" id="contactLinks">
              {contactLinks.map((l, index) => (
                <a href={l.href} className="contact-link" target="_blank" rel="noreferrer" key={index}>
                  <div className="icon">{l.icon}</div>
                  <div className="info">
                    <span className="label">{l.label}</span>
                    <span className="value">{l.value}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="reveal">
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="What's this about?" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell me more..." required></textarea>
              </div>
              <button type="submit" className="form-submit" disabled={disabled} style={buttonStyle}>
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
