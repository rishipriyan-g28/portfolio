import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Coding Profiles', href: '#coding-profiles' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Listen to scroll to update background blur & active sections
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy logic
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled glass-nav' : ''}`}>
      <div className="navbar-content">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo">
          <Terminal className="logo-icon" size={22} />
          <span className="logo-text">Rishi<span className="logo-highlight">.dev</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Shortcuts */}
        <div className="navbar-socials">
          <a href="https://github.com/rishipriyan-g28" target="_blank" rel="noopener noreferrer" className="social-nav-link" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" target="_blank" rel="noopener noreferrer" className="social-nav-link" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href="https://leetcode.com/u/Rishipriyang/" target="_blank" rel="noopener noreferrer" className="social-nav-link" aria-label="LeetCode">
            <LeetCodeIcon size={18} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-menu-socials">
            <a href="https://github.com/rishipriyan-g28" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <GithubIcon size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <LinkedinIcon size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Rishipriyang/" target="_blank" rel="noopener noreferrer" className="mobile-social-link">
              <LeetCodeIcon size={20} />
              <span>LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
