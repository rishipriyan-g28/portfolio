import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: 'Inplant and Internship Hub',
      description: 'A web platform that helps students discover and apply for internships and inplant training opportunities. It organizes opportunities based on domain, duration, and eligibility.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
      githubLink: 'https://github.com/rishipriyan-g28',
      liveLink: '#'
    },
    {
      title: 'Digital Marketing for Farmers',
      description: 'An online platform that helps farmers understand digital marketing strategies, browse digital marketing tutorials, and promote their products digitally to bypass middlemen.',
      tags: ['Web Development', 'UI/UX Design', 'Aesthetic CSS', 'Vanilla JS'],
      githubLink: 'https://github.com/rishipriyan-g28',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-3" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">My Projects</h2>
        </div>

        <div className="projects-grid grid-2">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-card reveal">
              <div className="project-card-header">
                <div className="project-folder-icon">
                  <Folder size={24} />
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-icon"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon size={20} />
                  </a>
                  {project.liveLink && project.liveLink !== '#' && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link-icon"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
