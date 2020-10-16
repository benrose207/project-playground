import React, { useEffect } from 'react';

const MustKnowDevTools = () => {
  function makeGreen() {
    const p = document.querySelector('.test-p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
  }

  useEffect(() => {
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    const headerStyling = 'font-size: 16px; background: lightGrey; color: black;';

    // Regular
    // console.log('hello');

    // Interpolated
    console.log('%c Using interpolation and console.log()', headerStyling);
    console.log('Hello, I am a %s string!', 'var');
    
    // Styled
    console.log('%c Using styling and console.log()', headerStyling);
    console.log('%c Hello, I am a styled string!', 'font-size: 40px; background:darkGrey; text-shadow: 5px 5px 0 blue');
    
    // warning!
    console.log('%c Using console.warn()', headerStyling);
    console.warn('OH NOOOO');
    
    // Error :|
    console.log('%c Using console.error()', headerStyling);
    console.error('This is an error!');
    
    // Info
    console.log('%c Using console.info()', headerStyling);
    console.info('Koala fingerprints are so close to humans that they can taint crime scenes.');
    
    // Testing
    console.log('%c Using console.assert()', headerStyling);
    const p = document.querySelector('.test-p');
    console.assert(p.classList.contains('special'), 'The paragraph element does not contain the "special" class.')
    
    // clearing
    
    // Viewing DOM Elements
    console.log('%c Using console.log() to view a DOM element. \n Using console.dir() to see all of its properties', headerStyling);
    console.log(p);
    console.dir(p);
    
    // Grouping together
    console.log('%c Using console.groupCollapsed()', headerStyling);
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`)
    })
    
    // counting
    console.log('%c Using console.count()', headerStyling);
    console.count('Ben');
    console.count('Ben');
    console.count('Ben');
    console.count('Rose');
    console.count('Ben');
    console.count('Rose');
    console.count('Rose');
    console.count('Ben');
    console.count('Rose');
    console.count('Ben');
    
    // timing
    console.log('%c Using console.time()', headerStyling);
    console.time('fetching data');
    fetch('https://api.github.com/users/benrose207')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

  });

  return (
    <div className="content-container">
      <h1>14 Must-Know Dev Tools Tricks</h1>
      <p>Not much to see for this exercise! Check the console for the output of the various console methods!</p>
      <p onClick={makeGreen} className="test-p">×BREAK×DOWN×</p>
    </div>
  );
};

export default MustKnowDevTools;
