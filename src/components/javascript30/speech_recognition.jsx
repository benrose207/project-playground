import React, { useEffect } from 'react';
import debounce from 'lodash.debounce';
import resumePDF from '../../assets/Rose_Benjamin_Resume.pdf';

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

      if (transcript.includes('visit portfolio')) {
        debouncedOpenPortfolio();
        window.setTimeout(debouncedOpenPortfolio.cancel, 500);
      }

      if (transcript.includes('view resume')) {
        debouncedOpenResume();
        window.setTimeout(debouncedOpenResume.cancel, 500);
      }
    }

    function openPortfolio() {
      const link = document.getElementById('portfolio');
      link.click();
    }

    function openResume() {
      const link = document.getElementById('resume');
      link.click();
    }

    const debouncedOpenPortfolio = debounce(openPortfolio, 300);
    const debouncedOpenResume = debounce(openResume, 300);

    recognition.addEventListener('result', speechHandler);
    recognition.addEventListener('end', recognition.start);
    
    recognition.start();
    
    return () => {
      recognition.stop();
      recognition.removeEventListener('result', speechHandler);
      recognition.removeEventListener('end', recognition.start);
    }
  }, [recognition]);


  return (
    <div className="content-container">
      <h1>Native Speech Recognition</h1>
      <p>Try saying something to see it transcribed below!</p>
      <p>Hint: try saying "visit portfolio" or "view resumé" (you may need to disable your pop-up block for these to work)</p>
      <div className="words" contentEditable>
      </div>
      <a
        href="https://benjaminrose.net"
        id="portfolio"
        target="_blank"
        rel="noopener noreferrer"
        style={{display: 'none'}}
      >Portfolio</a>
      <a
        href={resumePDF}
        id="resume"
        target="_blank"
        rel="noopener noreferrer"
        style={{display: 'none'}}
      >Resume</a>
    </div>
  )
};

export default SpeechRecognition;
