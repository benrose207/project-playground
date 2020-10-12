import React from 'react';
import { useEffect } from 'react';

const AjaxTypeAhead = () => {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const cities = [];
  fetch(endpoint)
    .then(blob => blob.json()
    .then(data => cities.push(...data)));
    
  const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  };

  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const displayMatches = (e, suggestions) => {
    const value = e.currentTarget.value;
    const matchArray = findMatches(value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');

    suggestions.innerHTML = html;
  };

  useEffect(() => {
    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', (e) => displayMatches(e, suggestions));
    searchInput.addEventListener('keyup', (e) => displayMatches(e, suggestions));
  })

  return (
    <div className="content-container">
      <h1>Type Ahead</h1>
      <form className="search-form">
        <input type="text" className="search" placeholder="City or State" aria-label="city/state text search"/>
          <ul className="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
          </ul>
      </form>
    </div>
  );
};

export default AjaxTypeAhead;
