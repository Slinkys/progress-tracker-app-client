import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav>
          <a 
            href="#info" 
            className="info"
            aria-label="How to use Progress Tracker"
          >
            Info
          </a>
    </nav>
  );
}