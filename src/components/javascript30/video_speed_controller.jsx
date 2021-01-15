import React from 'react';

const VideoSpeedController = () => {
  return (
    <div className="content-container">
      <h1>Video Speed Controller UI</h1>

      <div className="video-wrapper">
        <video className="flex" width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" loop controls></video>
        <div className="video-speed">
          <div className="speed-bar">1×</div>
        </div>
      </div>

    </div>
  )
};

export default VideoSpeedController;
