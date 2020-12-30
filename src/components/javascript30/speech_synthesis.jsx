import React, { useEffect } from 'react';

const SpeechSynthesis = () => {
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance();
    let voices = [];
    const voicesDropdown = document.querySelector('[name="voice"]');
    const options = document.querySelectorAll('[type="range"], [name="text"]');
    const speakButton = document.querySelector('#speak');
    const stopButton = document.querySelector('#stop');
  }, [])

  return (
    <div className="content-container speech-synth">
      <h1>Speech Synthesis</h1>

      <div className="voiceinator">

        <h2>The Voiceinator 5000</h2>

        <select name="voice" id="voices" aria-label="voices">
          <option value="">Select A Voice</option>
        </select>

        <label htmlFor="rate">Rate:</label>
        <input name="rate" type="range" min="0" max="3" defaultValue="1" step="0.1" id="rate" />

        <label htmlFor="pitch">Pitch:</label>
        <input name="pitch" type="range" min="0" max="2" step="0.1" id="pitch" />
        <textarea name="text" aria-label="textarea" defaultValue="Hello! I love JavaScript" />
        <button id="stop">Stop!</button>
        <button id="speak">Speak</button>

      </div>
    </div>
  );
};

export default SpeechSynthesis;
