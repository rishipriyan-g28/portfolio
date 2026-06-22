import React from 'react';
import { ExternalLink, Calendar, Trophy, Users, GitFork, Star } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const CodingProfiles = () => {
  // Mock contribution grid cells for GitHub (14 columns x 5 rows)
  const githubCells = Array.from({ length: 70 }, () => Math.floor(Math.random() * 4));

  return (
    <section id="coding-profiles" className="profiles-section">
      <div className="bg-glow-wrapper">
        <div className="glow-circle glow-2" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="section-subtitle">Platforms</span>
          <h2 className="section-title">Coding Profiles</h2>
        </div>

        <div className="profiles-grid grid-3">
          {/* LeetCode Card */}
          <div className="profile-card leetcode-style glass-card reveal">
            <div className="profile-card-header">
              <LeetCodeIcon className="profile-brand-icon leetcode" size={32} />
              <a 
                href="https://leetcode.com/u/Rishipriyang/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-btn"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            
            <div className="profile-card-body">
              <h3 className="profile-name">LeetCode</h3>
              <p className="profile-username">@Rishipriyang</p>

              {/* Stats Mock */}
              <div className="leetcode-stats">
                <div className="leetcode-radial">
                  <div className="radial-inner">
                    <span className="radial-num">150+</span>
                    <span className="radial-label">Solved</span>
                  </div>
                </div>
                <div className="leetcode-bars">
                  <div className="bar-item">
                    <div className="bar-info">
                      <span>Easy</span>
                      <span className="color-easy">80/100</span>
                    </div>
                    <div className="bar-track"><div className="bar-fill easy" style={{ width: '80%' }}></div></div>
                  </div>
                  <div className="bar-item">
                    <div className="bar-info">
                      <span>Medium</span>
                      <span className="color-medium">60/150</span>
                    </div>
                    <div className="bar-track"><div className="bar-fill medium" style={{ width: '40%' }}></div></div>
                  </div>
                  <div className="bar-item">
                    <div className="bar-info">
                      <span>Hard</span>
                      <span className="color-hard">10/50</span>
                    </div>
                    <div className="bar-track"><div className="bar-fill hard" style={{ width: '20%' }}></div></div>
                  </div>
                </div>
              </div>

              <div className="profile-badge-row">
                <span className="profile-badge">
                  <Trophy size={14} /> Problem Solver
                </span>
                <span className="profile-badge">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="profile-card github-style glass-card reveal">
            <div className="profile-card-header">
              <GithubIcon className="profile-brand-icon github" size={32} />
              <a 
                href="https://github.com/rishipriyan-g28" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-btn"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="profile-card-body">
              <h3 className="profile-name">GitHub</h3>
              <p className="profile-username">@rishipriyan-g28</p>

              {/* Contribution Graph Mock */}
              <div className="github-graph-container">
                <p className="graph-label">Contributions in the last year</p>
                <div className="github-grid">
                  {githubCells.map((val, idx) => (
                    <div 
                      key={idx} 
                      className={`grid-cell level-${val}`}
                    />
                  ))}
                </div>
                <div className="graph-legend">
                  <span>Less</span>
                  <div className="grid-cell level-0" />
                  <div className="grid-cell level-1" />
                  <div className="grid-cell level-2" />
                  <div className="grid-cell level-3" />
                  <span>More</span>
                </div>
              </div>

              <div className="github-repo-stats">
                <div className="repo-stat">
                  <GitFork size={14} />
                  <span>10+ Repos</span>
                </div>
                <div className="repo-stat">
                  <Star size={14} />
                  <span>Active Code</span>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="profile-card linkedin-style glass-card reveal">
            <div className="profile-card-header">
              <LinkedinIcon className="profile-brand-icon linkedin" size={32} />
              <a 
                href="https://www.linkedin.com/in/rishipriyan-g-9b977a327/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-link-btn"
              >
                <ExternalLink size={18} />
              </a>
            </div>

            <div className="profile-card-body">
              <h3 className="profile-name">LinkedIn</h3>
              <p className="profile-username">Rishipriyan G</p>

              <div className="linkedin-mock-profile">
                <div className="linkedin-banner"></div>
                <div className="linkedin-details">
                  <div className="linkedin-avatar-mini">RG</div>
                  <h4 className="linkedin-headline">Student at Kongu Engineering College</h4>
                  <p className="linkedin-subtext">Salem, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="linkedin-stats-row">
                <div className="linkedin-stat">
                  <Users size={16} />
                  <span><strong>150+</strong> connections</span>
                </div>
                <div className="linkedin-connect-btn">
                  Connect
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
