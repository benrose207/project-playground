import React from 'react';
import { useEffect } from 'react';

const FlexPanelsImageGallery = () => {
  
  const toggleOpen = (e) => {
    e.currentTarget.classList.toggle('open');
  }

  const toggleActive = (e) => {
    if (e.propertyName.includes('flex')) {
      e.currentTarget.classList.toggle('open-active');
    }
  }
  
  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
  })

  return (
    <div className="content-container">
      <h1>Flex Panels Image Gallery</h1>
      <section className="panels">
        <div className="panel panel1">
          <p>Hey</p>
          <p>Let's</p>
          <p>Dance</p>
        </div>
        <div className="panel panel2">
          <p>Give</p>
          <p>Take</p>
          <p>Receive</p>
        </div>
        <div className="panel panel3">
          <p>Experience</p>
          <p>It</p>
          <p>Today</p>
        </div>
        <div className="panel panel4">
          <p>Give</p>
          <p>All</p>
          <p>You can</p>
        </div>
        <div className="panel panel5">
          <p>Life</p>
          <p>In</p>
          <p>Motion</p>
        </div>
      </section>
    </div>
  )
};

export default FlexPanelsImageGallery;
