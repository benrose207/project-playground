import React from 'react';
import { useEffect } from 'react';

const MultipleCheckboxes = () => {
  useEffect(() => {
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

    let lastChecked;
    
    const handleCheck = (e) => {
      if (e.shiftKey && e.target.checked) {
        let inBetween = false;
        checkboxes.forEach(checkbox => {
          if (checkbox === lastChecked || checkbox === e.currentTarget) {
            inBetween = !inBetween;
          }
          
          if (inBetween) checkbox.checked = true;
        });
      }

      lastChecked = e.currentTarget;
    };

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
  });

  return (
    <div className="content-container">
      <h1>Hold Shift to Check Multiple Checkboxes</h1>
      <div className="inbox">
        <div className="item">
          <input type="checkbox" id="checkbox1"/>
          <label htmlFor="checkbox1">This is an inbox layout.</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox2"/>
          <label htmlFor="checkbox2">Check one item</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox3"/>
          <label htmlFor="checkbox3">Hold down your Shift key</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox4"/>
          <label htmlFor="checkbox4">Check a lower item</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox5"/>
          <label htmlFor="checkbox5">Everything in between should also be set to checked</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox6"/>
          <label htmlFor="checkbox6">Also works when holding shift and selecting a higher item</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox7"/>
          <label htmlFor="checkbox7">Done without any libraries/frameworks</label>
        </div>
        <div className="item">
          <input type="checkbox" id="checkbox8"/>
          <label htmlFor="checkbox8">Just regular JavaScript!</label>
        </div>
      </div>
    </div>
  );
};

export default MultipleCheckboxes;
