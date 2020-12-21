import React, { useEffect } from 'react';
import debounce from 'lodash.debounce';

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

      if (transcript.includes('view portfolio')) {
        debouncedOpen();
        window.setTimeout(debouncedOpen.cancel, 500);
      }
    }

    function openPortfolio() {
      const link = document.getElementById('portfolio');
      link.click();
    }

    const debouncedOpen = debounce(openPortfolio, 300);

    recognition.addEventListener('result', speechHandler);
    recognition.addEventListener('end', recognition.start);
    
    recognition.start();
    
    return () => {
      recognition.stop();
      recognition.removeEventListener('result', speechHandler);
      recognition.removeEventListener('end', recognition.start);
    }
  });


  return (
    <div className="content-container">
      <h1>Native Speech Recognition</h1>
      <div className="words" contentEditable>
      </div>
      <a
        href="https://benjaminrose.net"
        id="portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{display: 'none'}}
      >Portfolio</a>
    </div>
  )
};

export default SpeechRecognition;
