import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Hero = () => {
  const canvasRef = useRef(null);
  const [roleText, setRoleText] = useState('');
  const roles = [
    'B.Tech Information Technology Student',
    'Aspiring Software Developer',
    'Problem Solver',
    'Web Tech Enthusiast'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && roleText === currentRole) {
      // Wait before starting to delete
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && roleText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setRoleText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, currentRoleIndex]);

  // Coding Matrix Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary / Code characters
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}[];:+=&*#@$';
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const rainDrops = Array(columns).fill(1);

    const draw = () => {
      // Semi-transparent background to create trailing effect
      ctx.fillStyle = 'rgba(12, 7, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        // Random character
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        // Dynamic color gradient (purple and cyan)
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Choose color based on position
        if (i % 3 === 0) {
          ctx.fillStyle = 'rgba(6, 182, 212, 0.6)'; // cyan
        } else if (i % 3 === 1) {
          ctx.fillStyle = 'rgba(168, 85, 247, 0.6)'; // purple
        } else {
          ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; // blue
        }

        ctx.fillText(text, x, y);

        // Reset raindrop to top when it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      {/* Background Digital Matrix Rain */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background Overlay */}
      <div className="hero-overlay" />

      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-1" />
        <div className="glow-circle glow-2" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting-tag glass-card">
            <span className="pulse-dot"></span>
            <span>Welcome to my developer space</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Rishipriyan G</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="typewriter-prefix">&gt; </span>
            <span className="typewriter-text">{roleText}</span>
            <span className="typewriter-cursor">|</span>
          </h2>

          <p className="hero-description">
            Dedicated IT student passionate about software development, problem solving, and building practical real-world solutions. Continuously improving web technologies and DSA skills.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/rishipriyan-g28" target="_blank" rel="noopener noreferrer" className="hero-social-icon glass-card" aria-label="GitHub">
              <GithubIcon size={22} />
              <span className="social-tooltip">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" target="_blank" rel="noopener noreferrer" className="hero-social-icon glass-card" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/u/Rishipriyang/" target="_blank" rel="noopener noreferrer" className="hero-social-icon glass-card" aria-label="LeetCode">
              <LeetCodeIcon size={22} />
              <span className="social-tooltip">LeetCode</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-wrapper glass-card">
            <div className="terminal-header">
              <span className="terminal-dot close"></span>
              <span className="terminal-dot minimize"></span>
              <span className="terminal-dot expand"></span>
              <span className="terminal-title">developer.js</span>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
{`const developer = {
  name: "Rishipriyan G",
  college: "Kongu Engineering College",
  major: "B.Tech Information Technology",
  graduation: 2028,
  skills: [
    "Python", "Java", "JavaScript", 
    "HTML", "CSS", "Web Dev",
    "Data Structures", "Algorithms"
  ],
  passionateAbout: [
    "Problem Solving",
    "Real-world Solutions",
    "New Technologies"
  ]
};

console.log("Building the future, one line at a time.");`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
