import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Global Scroll Reveal Hook using Intersection Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1, // trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optionally, stop observing once revealed to retain status
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
