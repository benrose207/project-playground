import React, { useEffect } from 'react';

const WhackAMole = () => {
  useEffect(() => {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');    
  }, []);

  return (
    <div className="content-container">
      <h1>Whack-A-Mole! <span className="score">0</span></h1>

      <button onClick="startGame()">Start!</button>

      <div className="game">
        <div className="hole hole1">
          <div className="mole"></div>
        </div>
        <div className="hole hole2">
          <div className="mole"></div>
        </div>
        <div className="hole hole3">
          <div className="mole"></div>
        </div>
        <div className="hole hole4">
          <div className="mole"></div>
        </div>
        <div className="hole hole5">
          <div className="mole"></div>
        </div>
        <div className="hole hole6">
          <div className="mole"></div>
        </div>
      </div>

    </div>
  );
};

export default WhackAMole;
