import React, { useEffect } from 'react';

const EventCapture = () => {
  useEffect(() => {
    const container = document.querySelector('.event-capture');
    const divs = container.querySelectorAll('div');

    function logText(e) {
      console.log(this.classList.value);
      // e.stopPropagation(); // stop bubbling
    }

    divs.forEach(div => div.addEventListener('click', logText, {
      capture: false,
      once: false // e.g. only allow clicking a button once
    }));

    return (() => {
      divs.forEach(div => div.removeEventListener('click', logText));
    })
  }, []);

  return (
    <div className="content-container event-capture">
      <h1>Event Capture, Propagation, Bubbling</h1>

      <div className="one">
        <div className="two">
          <div className="three">
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCapture;
