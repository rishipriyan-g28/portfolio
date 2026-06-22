import React from 'react';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Web Development Certification',
      issuer: 'Codebind Technologies',
      description: 'Comprehensive program focused on modern frontend development, HTML, CSS, JavaScript essentials, design layouts, and responsive interfaces.',
      icon: <Award size={24} />,
      status: 'Verified'
    },
    {
      title: 'PC Troubleshooting Certification',
      issuer: 'Technical Training Academy',
      description: 'Hardware configuration, operating system maintenance, system diagnostics, and troubleshooting network/hardware conflicts.',
      icon: <ShieldCheck size={24} />,
      status: 'Completed'
    }
  ];

  return (
    <section id="certifications" className="certs-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-1" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid grid-2">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card glass-card reveal">
              <div className="cert-header">
                <div className="cert-icon-box">{cert.icon}</div>
                <div className="cert-badge">{cert.status}</div>
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer">{cert.issuer}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
