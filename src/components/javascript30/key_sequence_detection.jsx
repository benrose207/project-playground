import React from 'react';
import { useEffect } from 'react';

const KeySequenceDetection = () => {
  const pressed = [];
  const secretCode = 'benrose';

  const handleKeyUp = (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if (pressed.join('').includes(secretCode)) {
      console.log('Success!');
      window.cornify_add();
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.cornify.com/js/cornify.js";
    script.async = true;
    document.body.appendChild(script);

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  return (
    <div className="content-container">
      <h1>Key Sequence Detection</h1>
      <p>Try typing 'benrose' on your keyboard...</p>
    </div>
  );
};

export default KeySequenceDetection;
