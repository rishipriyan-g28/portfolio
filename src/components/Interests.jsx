import React from 'react';
import { Sliders, Camera, Film } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: 'Audio Editing',
      icon: <Sliders size={26} />,
      description: 'Designing soundscapes, mixing audio tracks, and tweaking frequencies to elevate the storytelling in multimedia projects.'
    },
    {
      title: 'Photo Editing',
      icon: <Camera size={26} />,
      description: 'Color grading, composition adjustment, and editing visuals to capture mood, lighting, and dramatic focus.'
    },
    {
      title: 'Movie Direction',
      icon: <Film size={26} />,
      description: 'Visual storytelling, sequencing scenes, script pacing, and orchestrating details to create moving cinematic experiences.'
    }
  ];

  return (
    <section id="interests" className="interests-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-3" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Passions</span>
          <h2 className="section-title">Creative Interests</h2>
        </div>

        <div className="interests-grid grid-3">
          {interests.map((interest, idx) => (
            <div key={idx} className="interest-card glass-card reveal">
              <div className="interest-icon-box">{interest.icon}</div>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-desc">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
