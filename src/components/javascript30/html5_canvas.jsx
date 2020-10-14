import React, { useEffect } from 'react';

const HTML5Canvas = () => {
  useEffect(() => {
    const canvas = document.querySelector('#draw');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 230;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 60;
    // ctx.globalCompositeOperation = 'color-dodge';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    const draw = (event) => {
      if (!isDrawing) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(event.offsetX, event.offsetY);
      ctx.stroke();

      [lastX, lastY] = [event.offsetX, event.offsetY];
      hue++;
      if (hue >= 360) hue = 0;

      if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;

      if (direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }
    };

    const reset = (e) => {
      e.preventDefault();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener('mousedown', (event) => {
      isDrawing = true;
      [lastX, lastY] = [event.offsetX, event.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    const resetButton = document.getElementById('canvas-reset');
    resetButton.addEventListener('click', reset);
  });

  return (
    <div className="content-container">
      <h1>Fun with HTML5 Canvas</h1>
      <div className="flex-row-between canvas-header">
        <p>Click and drag in the box below to draw!</p>
        <button id="canvas-reset" className="button">Reset</button>
      </div>
      <canvas id="draw" width="800" height="500"></canvas>
    </div>
  );
};

export default HTML5Canvas;
