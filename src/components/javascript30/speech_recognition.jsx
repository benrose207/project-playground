import React, { useEffect } from 'react';

const SpeechRecognition = () => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  recognition.interimResults = true;

  useEffect(() => {
    let p = document.createElement('p');
    const words = document.querySelector('.words');
    words.appendChild(p);

    function speechHandler(e) {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      
      p.textContent = transcript;

      if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
      }

      // Could use .includes to check if transcript contains a certain phrase of word, and then run something else. I.e. console.log something, hit an API, etc. etc.
    }

    recognition.addEventListener('result', speechHandler);
    recognition.addEventListener('end', recognition.start);
    
    recognition.start();
    
    return () => {
      recognition.removeEventListener('result', speechHandler);
      recognition.removeEventListener('end', recognition.start);
    }
  });


  return (
    <div className="content-container">
      <h1>Native Speech Recognition</h1>
      <div className="words" contentEditable>
      </div>
    </div>
  )
};

export default SpeechRecognition;
