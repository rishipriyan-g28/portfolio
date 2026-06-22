import React from 'react';

// Custom GitHub SVG Icon
export const GithubIcon = ({ size = 20, className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Custom LinkedIn SVG Icon
export const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Custom LeetCode SVG Icon
export const LeetCodeIcon = ({ size = 20, className = '' }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    width={size} 
    height={size} 
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-11.75 11.75a1.38 1.38 0 0 0 0 1.951l.008.008a1.38 1.38 0 0 0 1.951 0l11.75-11.75a1.38 1.38 0 0 0-.961-2.373zm4.243 4.243a1.374 1.374 0 0 0-.961.414l-10.793 10.793a1.38 1.38 0 0 0 0 1.951l.007.007a1.38 1.38 0 0 0 1.951 0l10.793-10.793a1.38 1.38 0 0 0-.997-2.372zm-9.017 9.017a1.38 1.38 0 0 0 0 1.951l.007.007a1.38 1.38 0 0 0 1.951 0l1.217-1.217a1.38 1.38 0 0 0 0-1.951l-.007-.008a1.38 1.38 0 0 0-1.951 0l-1.217 1.218zm2.148 4.243l-.008.008a1.38 1.38 0 0 0 0 1.951l3.52 3.52c.266.266.626.414.996.414h.01a1.38 1.38 0 0 0 .976-.404l10.87-10.87a1.38 1.38 0 0 0 0-1.951l-.008-.008a1.38 1.38 0 0 0-1.951 0l-10.87 10.87a1.38 1.38 0 0 1-.976.404h-.01a1.38 1.38 0 0 1-.976-.414z" />
  </svg>
);
