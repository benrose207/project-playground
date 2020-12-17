import React, { useEffect } from 'react';
import snap from '../../assets/sounds/snap.mp3';

const WebcamFun = () => {
  useEffect(() => {
    const video = document.querySelector('.player');
    const canvas = document.getElementById('photo');
    const ctx = canvas.getContext('2d');
    // const strip = document.querySelector('.strip');
    // const snap = document.querySelector('.snap');

    function getVideo() {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
          video.srcObject = localMediaStream;
          video.onloadedmetadata = () => {
            video.play();
          }
        })
        .catch(err => {
          console.error(err);
        });
    }

    function paintToCanvas() {
      const width = video.videoWidth;
      const height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;

      return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);


      }, 16);
    }

    getVideo();

    // video.addEventListener('canplay', paintToCanvas);
  });

  const takePhoto = () => {
    const snap = document.querySelector('.snap');
    const canvas = document.getElementById('photo');
    const strip = document.querySelector('.strip');

    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'selfie');
    link.innerHTML = `<img src="${data}" alt="Selfie" />`;
    strip.insertBefore(link, strip.firstChild);
  }

  return (
    <div className="content-container">
      <h1>Unreal Webcam Fun</h1>
      <div className="photobooth">
        <div className="photo-controls">
          <button onClick={takePhoto}>Take Photo</button>
          <div className="rgb">
            <div>
              <label htmlFor="rmin">Red Min:</label>
              <input type="range" min='0' max='255' id="rmin" />
              <label htmlFor="rmax">Red Max:</label>
              <input type="range" min='0' max='255' id="rmax"/>
            </div>

            <div>
              <label htmlFor="gmin">Green Min:</label>
              <input type="range" min='0' max='255' id="gmin"/>
              <label htmlFor="gmax">Green Max:</label>
              <input type="range" min='0' max='255' id="gmax"/>
            </div>

            <div>
              <label htmlFor="bmin">Blue Min:</label>
              <input type="range" min='0' max='255' id="bmin"/>
              <label htmlFor="bmax">Blue Max:</label>
              <input type="range" min='0' max='255' id="bmax"/>
            </div>
          </div>
        </div>

        <canvas id="photo"></canvas>
        <video className="player"></video>
        <div className="strip"></div>
      </div>

      <audio className="snap" src={snap} hidden></audio>
    </div>
  );
};

export default WebcamFun;
