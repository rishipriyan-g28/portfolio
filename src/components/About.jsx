import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, Terminal } from 'lucide-react';
import rishiPhoto from '../assets/rishi_photo.jpeg';

const About = () => {
  const traits = [
    { icon: <Terminal size={20} />, title: 'IT Student', description: 'Deepening foundations in Information Technology and Web Architectures.' },
    { icon: <Sparkles size={20} />, title: 'Aspiring Developer', description: 'Focused on writing clean, scalable code and building user-centric interfaces.' },
    { icon: <BookOpen size={20} />, title: 'Active Learner', description: 'Constantly practicing data structures, algorithms, and exploring modern frameworks.' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-3" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Discovery</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual reveal">
            <div className="avatar-frame glass-card">
              <img src={rishiPhoto} alt="Rishipriyan G" className="avatar-image" />
              <div className="avatar-glow"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content reveal">
            <h3 className="about-heading">
              Building Solutions with <span className="gradient-text">Code & Design</span>
            </h3>
            
            <p className="about-text">
              I am an Information Technology student at Kongu Engineering College. My journey in technology is driven by a deep curiosity about how systems function and a passion for creating impactful software.
            </p>

            <p className="about-text">
              I enjoy dismantling complex problems, designing logical solutions, and implementing them through code. Whether it is dynamic frontends, script automation, or structural algorithms, I am always excited to learn and construct real-world systems.
            </p>

            {/* Trait Cards */}
            <div className="traits-container">
              {traits.map((trait, index) => (
                <div key={index} className="trait-card glass-card">
                  <div className="trait-icon">{trait.icon}</div>
                  <div className="trait-info">
                    <h4 className="trait-title">{trait.title}</h4>
                    <p className="trait-desc">{trait.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Timeline */}
            <h3 className="about-heading education-heading">
              Education
            </h3>

            <div className="education-timeline">
              <div className="education-card glass-card">
                <div className="education-badge">
                  <GraduationCap size={24} />
                </div>
                <div className="education-details">
                  <div className="education-meta">
                    <span className="education-duration">
                      <Calendar size={14} /> 2024 - 2028
                    </span>
                    <span className="education-location">
                      <MapPin size={14} /> Erode, Tamil Nadu
                    </span>
                  </div>
                  <h4 className="education-college">Kongu Engineering College</h4>
                  <p className="education-degree">B.Tech Information Technology</p>
                  <p className="education-desc">
                    Learning core engineering principles, computing mathematics, database architectures, and software engineering methodologies. Active in coding clubs and technology projects.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
