import React from 'react';
import { Terminal, Globe, Brain, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Terminal size={24} />,
      subtitle: 'Languages I use to write backend logic and solve analytical problems.',
      skills: [
        { name: 'Python', level: '85%' },
        { name: 'Java', level: '80%' },
        { name: 'JavaScript', level: '75%' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      subtitle: 'Tools and standards for structuring, styling, and developing websites.',
      skills: [
        { name: 'HTML5', level: '90%' },
        { name: 'CSS3', level: '85%' },
        { name: 'JavaScript', level: '75%' },
        { name: 'Web Development', level: '80%' }
      ]
    },
    {
      title: 'Computer Science & Soft Skills',
      icon: <Brain size={24} />,
      subtitle: 'Fundamentals of computing, analytical thinking, and collaboration.',
      skills: [
        { name: 'Problem Solving', level: '85%' },
        { name: 'Data Structures', level: '80%' },
        { name: 'Algorithms', level: '80%' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-1" />
        <div className="glow-circle glow-2" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid grid-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-card glass-card reveal">
              <div className="skills-card-header">
                <div className="skills-card-icon">{category.icon}</div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>
              
              <p className="skills-card-desc">{category.subtitle}</p>
              
              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-progress" 
                        style={{ '--progress-width': skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
