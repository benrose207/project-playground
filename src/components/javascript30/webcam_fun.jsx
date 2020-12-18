import React, { useEffect } from 'react';
import snap from '../../assets/sounds/snap.mp3';

const WebcamFun = () => {

  useEffect(() => {
    const video = document.querySelector('.player');
    const canvas = document.getElementById('photo');
    const ctx = canvas.getContext('2d');

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
      let intervalId;
      if (intervalId) clearInterval(intervalId);

      const width = video.videoWidth;
      const height = video.videoHeight;
      canvas.width = width;
      canvas.height = height;

      intervalId =  setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        ctx.globalAlpha = 1.0;
        
        const buttons = document.querySelector('.photo-buttons').children;
        
        for (let i = 0; i < buttons.length; i++) {
          const button = buttons[i];
          if (button.dataset.status === 'active') {
            if (button.id === 'redEffect') {
              pixels = redEffect(pixels);
              // ctx.globalAlpha = 1.0;
            } else if (button.id === 'rgbaSplit') {
              pixels = rgbSplit(pixels);
              ctx.globalAlpha = 0.1;
            } else if (button.id === 'greenScreen') {
              pixels = greenScreen(pixels);
              // ctx.globalAlpha = 1.0;
            }
          }
        }

        ctx.putImageData(pixels, 0, 0);
      }, 16);
    }

    function redEffect(pixels) {
      const data = pixels.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i] += 100;
        data[i + 1] -= 50;
        data[i + 2] *= 0.5;
      }

      return pixels;
    }

    function rgbSplit(pixels) {
      const data = pixels.data;
      for (let i = 0; i < data.length; i += 4) {
        data[i - 150] = data[i];
        data[i + 100] = data[i + 1];
        data[i - 150] = data[i + 2];
      }

      return pixels;
    }

    function greenScreen(pixels) {
      const levels = {};

      document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value;
      });

      for (let i = 0; i < pixels.data.length; i += 4) {
        const red = pixels.data[i];
        const green = pixels.data[i + 1];
        const blue = pixels.data[i + 2];

        if (red >= levels.rmin
          && green >= levels.gmin
          && blue >= levels.bmin
          && red <= levels.rmax
          && green <= levels.gmax
          && blue <= levels.bmax) {
          pixels.data[i + 3] = 0;
          }
      }

      return pixels;
    }

    getVideo();

    video.addEventListener('canplay', paintToCanvas);
  });

  const handleEffectChange = (e) => {
    const buttons = document.querySelector('.photo-buttons').children;
    let status = e.target.dataset.status

    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];

      if (e.target.id !== button.id) {
        button.dataset.status = '';
      } else {
        if (!status) {
          e.target.dataset.status = 'active';
        } else {
          e.target.dataset.status = "";
        }
      }
    }
  }

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
          <div className="photo-buttons">
            <button onClick={takePhoto}>Take Photo</button>
            <button onClick={handleEffectChange} data-status="" id='redEffect'>Red Effect</button>
            <button onClick={handleEffectChange} data-status="" id='rgbaSplit'>RGBA Split</button>
            <button onClick={handleEffectChange} data-status="" id='greenScreen'>Green Screen</button>
          </div>
          <div className="rgb">
            <div>
              <label htmlFor="rmin">Red Min:</label>
              <input type="range" min='0' max='255' id="rmin" name="rmin" />
              <label htmlFor="rmax">Red Max:</label>
              <input type="range" min='0' max='255' id="rmax" name="rmax" />
            </div>

            <div>
              <label htmlFor="gmin">Green Min:</label>
              <input type="range" min='0' max='255' id="gmin" name="gmin" />
              <label htmlFor="gmax">Green Max:</label>
              <input type="range" min='0' max='255' id="gmax" name="gmax" />
            </div>

            <div>
              <label htmlFor="bmin">Blue Min:</label>
              <input type="range" min='0' max='255' id="bmin" name="bmin" />
              <label htmlFor="bmax">Blue Max:</label>
              <input type="range" min='0' max='255' id="bmax" name="bmax" />
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
