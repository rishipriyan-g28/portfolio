import React from 'react';
import { Terminal, ChevronUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        <div className="footer-top">
          {/* Logo & Description */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <Terminal className="logo-icon" size={20} />
              <span>Rishi<span className="logo-highlight">.dev</span></span>
            </a>
            <p className="footer-tagline">
              Information Technology student focused on web technologies, design systems, and programming solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-nav-links">
              <a href="#hero" className="footer-nav-link">Home</a>
              <a href="#about" className="footer-nav-link">About</a>
              <a href="#skills" className="footer-nav-link">Skills</a>
              <a href="#projects" className="footer-nav-link">Projects</a>
              <a href="#coding-profiles" className="footer-nav-link">Profiles</a>
              <a href="#certifications" className="footer-nav-link">Certifications</a>
              <a href="#contact" className="footer-nav-link">Contact</a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="footer-socials-group">
            <h4 className="footer-links-title">Profiles</h4>
            <div className="footer-social-icons">
              <a href="https://github.com/rishipriyan-g28" target="_blank" rel="noopener noreferrer" className="footer-social-btn glass-card" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" target="_blank" rel="noopener noreferrer" className="footer-social-btn glass-card" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://leetcode.com/u/Rishipriyang/" target="_blank" rel="noopener noreferrer" className="footer-social-btn glass-card" aria-label="LeetCode">
                <LeetCodeIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {currentYear} Rishipriyan G. All rights reserved.
          </p>
          <button onClick={handleScrollToTop} className="scroll-top-btn glass-card" aria-label="Scroll to top">
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
