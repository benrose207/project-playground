import React, { useEffect } from 'react';
import debounce from '../utils/debounce';

const VideoSpeedController = () => {
  useEffect(() => {
    const speed = document.querySelector('.video-speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.flex');

    function handleMove(e) {
      const y = e.pageY - this.offsetTop;
      const percent = y / this.offsetHeight;
      const min = 0.4;
      const max = 4;
      const height = Math.round(percent * 100) + '%';
      const playbackRate = percent * (max - min) + min;

      bar.style.height = height;
      bar.textContent = playbackRate.toFixed(2) + 'x';
      video.playbackRate = playbackRate;
    }

    speed.addEventListener('mousemove', debounce(handleMove, 5));
    
    return (() => {
      speed.removeEventListener('mousemove', debounce(handleMove, 5));      
    });
  }, []);

  return (
    <div className="content-container">
      <h1>Video Speed Controller UI</h1>

      <div className="video-wrapper">
        <video className="flex" width="765" height="430" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" loop controls></video>
        <div className="video-speed">
          <div className="speed-bar">1×</div>
        </div>
      </div>

    </div>
  )
};

export default VideoSpeedController;
