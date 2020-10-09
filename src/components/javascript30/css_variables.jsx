import React, { useEffect, useState } from 'react';
import hikeImg from '../../assets/images/mt_hoffmann2.JPG';

const CSSVariables = () => {
  const [spacing, setSpacing] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState('#7105BE');

  const handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.controls input');

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  });

  return (
    <div className="content-container">
      <h1>Update CSS Variables with <span className='hl'>JS</span></h1>

      <div className="controls">
        <label htmlFor="spacing">Spacing:</label>
        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={spacing}
          data-sizing="px"
          onChange={e => setSpacing(e.target.value)}
        />

        <label htmlFor="blur">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value={blur}
          data-sizing="px"
          onChange={e => setBlur(e.target.value)}
        />

        <label htmlFor="base">Base Color:</label>
        <input
          id="base"
          type="color"
          name="base"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
      </div>
      <picture className="css-variable-img">
        <img
          src={hikeImg}
          alt="view of Half Dome from Mt Hoffman in Yosemite National Park"
        />
      </picture>
    </div>
  );
};

export default CSSVariables;
