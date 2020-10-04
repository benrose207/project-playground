import React, { useEffect } from 'react';
import clap from '../../assets/sounds/clap.wav';
import boom from '../../assets/sounds/boom.wav';
import hihat from '../../assets/sounds/hihat.wav';
import kick from '../../assets/sounds/kick.wav';
import openhat from '../../assets/sounds/openhat.wav';
import ride from '../../assets/sounds/ride.wav';
import snare from '../../assets/sounds/snare.wav';
import tink from '../../assets/sounds/tink.wav';
import tom from '../../assets/sounds/tom.wav';

const DrumKit = () => {

  const playSound = (e) => {
    let audio, key;
    if (e.keyCode) {
      audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    } else if (e.currentTarget.className === 'key') {
      audio = document.querySelector(`audio[data-key="${e.currentTarget.dataset.key}"]`);
      key = e.currentTarget;
    }

    if (audio) {
      audio.currentTime = 0;
      audio.play();
      key.classList.add('emphasized');
    }
  };

  const removeTransition = (e) => {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('emphasized');
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', playSound);

    // const keys = document.querySelectorAll('.key');
    // keys.forEach(key => key.addEventListener('transitionend', removeTransition));

    const keysContainer = document.querySelector('.keys');
    keysContainer.addEventListener('transitionend', removeTransition);

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('click', playSound));

    return () => {
      window.removeEventListener('keydown', playSound);
      keys.forEach(key => key.removeEventListener('click', playSound));
    }
  });

  return (
    <div className="content-container">
      <h1>Day 1: Drum Kit</h1>
      <div className="keys">
        <div data-key="65" className="key">
          <kbd>A</kbd>
          <span className="sound">clap</span>
        </div>
        <div data-key="83" className="key">
          <kbd>S</kbd>
          <span className="sound">hihat</span>
        </div>
        <div data-key="68" className="key">
          <kbd>D</kbd>
          <span className="sound">kick</span>
        </div>
        <div data-key="70" className="key">
          <kbd>F</kbd>
          <span className="sound">openhat</span>
        </div>
        <div data-key="71" className="key">
          <kbd>G</kbd>
          <span className="sound">boom</span>
        </div>
        <div data-key="72" className="key">
          <kbd>H</kbd>
          <span className="sound">ride</span>
        </div>
        <div data-key="74" className="key">
          <kbd>J</kbd>
          <span className="sound">snare</span>
        </div>
        <div data-key="75" className="key">
          <kbd>K</kbd>
          <span className="sound">tom</span>
        </div>
        <div data-key="76" className="key">
          <kbd>L</kbd>
          <span className="sound">tink</span>
        </div>
      </div>

      <audio data-key="65" src={clap}></audio>
      <audio data-key="83" src={hihat}></audio>
      <audio data-key="68" src={kick}></audio>
      <audio data-key="70" src={openhat}></audio>
      <audio data-key="71" src={boom}></audio>
      <audio data-key="72" src={ride}></audio>
      <audio data-key="74" src={snare}></audio>
      <audio data-key="75" src={tom}></audio>
      <audio data-key="76" src={tink}></audio>
    </div>
  );
};

export default DrumKit;