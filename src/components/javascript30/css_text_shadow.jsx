import React from 'react';
import { useEffect } from 'react';

const CSSTextShadow = () => {
  useEffect(() => {
    const hero = document.querySelector('.css-shadow-hero');
    const text = hero.querySelector('h2');

    function shadow(e) {
      const { offsetWidth: width, offsetHeight: height } = hero;
      let { offsetX: x, offsetY: y } = e;
      const walk = 50;

      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop - 245;
      }

      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));

      text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
        `;
      }

    hero.addEventListener('mousemove', shadow);
  })

  return (
    <div className="content-container">
      <h1>CSS Text Shadow Mouse Move Effect</h1>
      <div className='css-shadow-hero'>
        <h2>
          <span role='img' aria-label='fire emoji'>🔥</span>
          WOAH!
        </h2>
      </div>
    </div>
  );
};

export default CSSTextShadow;
