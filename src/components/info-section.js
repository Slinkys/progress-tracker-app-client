import React from 'react';
import './info-section.css';

export default function InfoSection(props) {
  return (
   <div className="info">
    <section id="info">
      <h2>How to use this app</h2>
        <p>Progress Tracker will help you track and calculate your daily progress so you can set realistic deadlines.</p>
        <p>To use the app: </p>
          <li>Enter your daily projected goal and days until deadline</li>
          <li>Enter your daily progress (i.e., the number of words you wrote each day).</li>
        <p>Progress Tracker will track your progress, adjusting your daily goal as needed to meet your deadline.</p>
  </section>
  </div> 
  );
}