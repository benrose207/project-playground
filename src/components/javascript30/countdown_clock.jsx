import React, { useEffect } from 'react';

const CountdownClock = () => {
  useEffect(() => {
    let countdown;
    const timerDisplay = document.querySelector('.display__time-left');
    const endTime = document.querySelector('.display__end-time');
    const buttons = document.querySelectorAll('[data-time');

    function timer(seconds) {
      clearInterval(countdown);

      const now = Date.now();
      const then = now + (seconds * 1000);
      displayTimeLeft(seconds);
      displayEndTime(then);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
          clearInterval(countdown);
          return;
        }

        displayTimeLeft(secondsLeft);
      }, 1000);
    }

    function displayTimeLeft(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display = `${minutes}: ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

      document.title = display;
      timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const hour = end.getHours();
      const minutes = end.getMinutes();

      endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function startTimer() {
      const seconds = parseInt(this.dataset.time);
      timer(seconds);
    }

    buttons.forEach(button => button.addEventListener('click', startTimer));
    document.customForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const mins = this.minutes.value;
      this.reset();
      timer(mins * 60);
    });

    return (() => {
      buttons.forEach(button => button.removeEventListener('click', startTimer));
    });
  }, []);

  return (
    <div className="content-container">
      <h1>Countdown Clock</h1>

      <div className="timer">
        <div className="timer__controls">
          <button data-time="20" className="timer__button">20 Secs</button>
          <button data-time="300" className="timer__button">Work 5</button>
          <button data-time="900" className="timer__button">Quick 15</button>
          <button data-time="1200" className="timer__button">Snack 20</button>
          <button data-time="3600" className="timer__button">Lunch Break</button>
          <form name="customForm" id="custom">
            <input type="text" name="minutes" placeholder="Enter Minutes" aria-label="Enter Minutes"/>
          </form>
        </div>
          <div className="display">
            <h2 className="display__time-left"></h2>
            <p className="display__end-time"></p>
          </div>
        </div>      
    </div>
  );
};

export default CountdownClock;
