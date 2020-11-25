import React from 'react';
import { useEffect } from 'react';

const SortWithoutArticles = () => {

  useEffect(() => {
    const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
  
    function strip(bandName) {
      return bandName.replace(/^(a |the |an )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
  
    document.querySelector('#bands').innerHTML = sortedBands.map(band => (
      `<li>${band}</li>`
    )).join('');
  }, []);

  return (
    <div className="content-container">
      <h1>Sorting Band Names Without Articles</h1>
      <ul id="bands"></ul>
    </div>
  );
};

export default SortWithoutArticles;
