import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Mock API request delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000); // clear success msg after 5s
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-2" />
        <div className="glow-circle glow-3" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid grid-2">
          {/* Left Column: Contact details */}
          <div className="contact-info-panel reveal">
            <h3 className="contact-heading">Let's Discuss Your <span className="gradient-text">Next Project</span></h3>
            
            <p className="contact-desc-text">
              I am open to discussions about software developer internships, inplant training opportunities, web development project collaborations, or competitive programming discussions. Feel free to shoot a message!
            </p>

            <div className="contact-details-list">
              <a href="mailto:rishipriyan.g28@gmail.com" className="contact-detail-item glass-card">
                <div className="detail-icon"><Mail size={20} /></div>
                <div className="detail-text">
                  <span className="detail-label">Email Me</span>
                  <span className="detail-val">rishipriyan.g28@gmail.com</span>
                </div>
              </a>

              <div className="contact-detail-item glass-card">
                <div className="detail-icon"><MapPin size={20} /></div>
                <div className="detail-text">
                  <span className="detail-label">Location</span>
                  <span className="detail-val">Salem, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social-row">
              <h4 className="social-row-title">Follow My Profiles</h4>
              <div className="social-icons-list">
                <a href="https://github.com/rishipriyan-g28" target="_blank" rel="noopener noreferrer" className="contact-social-btn glass-card" aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" target="_blank" rel="noopener noreferrer" className="contact-social-btn glass-card" aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
                <a href="https://leetcode.com/u/Rishipriyang/" target="_blank" rel="noopener noreferrer" className="contact-social-btn glass-card" aria-label="LeetCode">
                  <LeetCodeIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="contact-form-panel reveal">
            <form onSubmit={handleSubmit} className="contact-form glass-card">
              {submitted ? (
                <div className="form-success-overlay">
                  <CheckCircle size={56} className="success-icon" />
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-desc">Thank you for reaching out, Rishipriyan will get back to you shortly.</p>
                </div>
              ) : null}

              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="John Doe"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="johndoe@example.com"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="Internship opportunity"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea" 
                  placeholder="Hey Rishipriyan, I would love to connect..."
                  disabled={loading}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary form-submit-btn" 
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
