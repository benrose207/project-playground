import React, { useEffect } from 'react';
import snap from '../../assets/sounds/snap.mp3';

const WebcamFun = () => {
  useEffect(() => {
    const video = document.querySelector('.player');
    const canvas = document.querySelector('.photo');
    const ctx = canvas.getContext('2d');
    const strip = document.querySelector('.strip');
    const snap = document.querySelector('.snap');
  });

  return (
    <div className="content-container">
      <h1>Unreal Webcam Fun</h1>
      <div className="photobooth">
        <div className="controls">
          <button onClick="takePhoto()">Take Photo</button>
          {/* <div className="rgb">
            <label for="rmin">Red Min:</label>
            <input type="range" min='0' max='255' name="rmin" />
            <label for="rmax">Red Max:</label>
            <input type="range" min='0' max='255' name="rmax"/>

            <br/>

            <label for="gmin">Green Min:</label>
            <input type="range" min='0' max='255' name="gmin"/>
            <label for="gmax">Green Max:</label>
            <input type="range" min='0' max='255' name="gmax"/>

            <br/>

            <label for="bmin">Blue Min:</label>
            <input type="range" min='0' max='255' name="bmin"/>
            <label for="bmax">Blue Max:</label>
            <input type="range" min='0' max='255' name="bmax"/>
          </div> */}
        </div>

        <canvas className="photo"></canvas>
        <video className="player"></video>
        <div className="strip"></div>
      </div>

      <audio className="snap" src={snap} hidden></audio>
    </div>
  );
};

export default WebcamFun;
