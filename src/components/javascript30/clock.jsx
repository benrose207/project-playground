import React from 'react';

const Clock = () => {
  return (
    <div className="content-container">
      <h1>Day 2: CSS + JS Clock</h1>
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand"></div>
          <div className="hand min-hand"></div>
          <div className="hand second-hand"></div>
        </div>
      </div>
    </div>
  )
};

export default Clock;