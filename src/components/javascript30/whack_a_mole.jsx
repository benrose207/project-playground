import React, { useEffect, useRef } from 'react';

const WhackAMole = () => {
  let lastHole;
  let timeUp = false;
  let score = 0;
  const scoreBoard = useRef();

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
      return randomHole(holes);
    }

    lastHole = hole;
    return hole;
  }

  function peep() {
    const holes = document.querySelectorAll('.hole');
    const hole = randomHole(holes);
    hole.classList.add('up');

    const time = randomTime(200, 1000);
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.current.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => {
      timeUp = true;
    }, 10000);
  }

  useEffect(() => {
    const moles = document.querySelectorAll('.mole');

    function bonk(e) {
      if (!e.isTrusted) return;
      score++;
      this.classList.remove('up');
      scoreBoard.current.textContent = score;
    }

    moles.forEach(mole => mole.addEventListener('click', bonk));
    
    return (() => {
      moles.forEach(mole => mole.removeEventListener('click', bonk));
    });
  }, [score]);

  return (
    <div className="content-container">
      <h1>Whack-A-Mole!</h1>
      <p className="game-details">Score: <span className="score" ref={scoreBoard}>0</span></p>

      <button onClick={startGame} className="button start-game">Start!</button>

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
