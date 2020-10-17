import React from 'react';
import { useEffect } from 'react';
import MountainsVideo from '../../assets/videos/Mountains.mp4';

const VideoPayer = () => {
  useEffect(() => {
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress__filled');
    const toggle = player.querySelector('.toggle');
    const skipButtons = player.querySelectorAll('[data-skip]');
    const ranges = player.querySelectorAll('.player__slider');

    const togglePlay = () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    const updateButton = () => {
      const icon = video.paused ? '►' : '❚ ❚';
      toggle.textContent = icon;
    }

    const skip = (e) => {
      video.currentTime += parseFloat(e.target.dataset.skip);
    };

    const handleRangeUpdate = (e) => {
      video[e.target.name] = e.target.value;
    };

    const handleProgress = () => {
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.flexBasis = `${percent}%`;
    }

    const scrub = (e) => {
      const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
      video.currentTime = scrubTime;
    }

    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);

    skipButtons.forEach(skipButton => {
      skipButton.addEventListener('click', skip);
    });

    ranges.forEach(range => {
      range.addEventListener('change', handleRangeUpdate);
      range.addEventListener('mousemove', handleRangeUpdate);
    });

    let mousedown = false;
    progress.addEventListener('click', scrub);
    progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    progress.addEventListener('mousedown', () => mousedown = true);
    progress.addEventListener('mouseup', () => mousedown = false);
  });

  return (
    <div className="content-container">
      <h1>Custom HTML5 Video Player</h1>
      <div className="player">
        <video className="player__video viewer" src={MountainsVideo}></video>

        <div className="player__controls">
          <div className="progress">
            <div className="progress__filled"></div>
          </div>
          <button className="player__button toggle" title="Toggle Play">►</button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            aria-label="volume slider"
            min="0"
            max="1"
            step="0.05"
            defaultValue="1" />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            aria-label="playback rate slider"
            min="0.5"
            max="3"
            step="0.1"
            defaultValue="1" />
          <button data-skip="-10" className="player__button">« 10s</button>
          <button data-skip="25" className="player__button">25s »</button>
        </div>
      </div>
    </div>
  );
};

export default VideoPayer;
