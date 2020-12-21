import React from 'react';

const SpeechRecognition = () => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  return (
    <div className="content-container">
      <h1>Native Speech Recognition</h1>
      <div className="words" contentEditable>
      </div>
    </div>
  )
};

export default SpeechRecognition;
