import React, { useEffect } from 'react';
import drumKitImg from '../../assets/images/drum-kit.jpg';
import clockImg from '../../assets/images/clock.jpg';
import day3Img from '../../assets/images/js30_day3.png';
import day4Img from '../../assets/images/js30_day4.png';
import day5Img from '../../assets/images/js30_day5.png';
import day6Img from '../../assets/images/js30_day6.png';
import day7Img from '../../assets/images/js30_day7.png';
import day8Img from '../../assets/images/js30_day8.png';
import day9Img from '../../assets/images/js30_day9.png';
import day10Img from '../../assets/images/js30_day10.png';
import day11Img from '../../assets/images/js30_day11.png';
import day12Img from '../../assets/images/js30_day12.png';
import day13Img from '../../assets/images/js30_day13.png';
import '../../assets/stylesheets/javascript30.css';
import Card from './card';

const JavaScript30 = () => {
  const slideIn = (e) => {
    const cardContent = e.currentTarget.querySelector('.card-content');
    cardContent.classList.add('slide-in');
  }

  const slideOut = (e) => {
    e.stopPropagation();
    const cardHeader = e.currentTarget.parentElement;
    cardHeader.classList.remove('slide-in');
  }

  useEffect(() => {
    document.title = 'JavaScript30 | Ben Rose';

    const cards = document.querySelectorAll('.card-container');
    cards.forEach(card => card.addEventListener('click', slideIn));

    const cardHeaders = document.querySelectorAll('.card-container .flex-row-between');
    cardHeaders.forEach(cardHeader => cardHeader.addEventListener('click', slideOut));

    return () => {
      cards.forEach(card => card.removeEventListener('click', slideIn));
      cardHeaders.forEach(cardHeader => cardHeader.removeEventListener('click', slideOut));
    }
  });

  return (
    <div className="content-container-grid">
      <h1>JavaScript30</h1>
      <p>The below projects are my take on the 30 vanilla JavaScript exercises in the 
        <a href="https://javascript30.com/" target="_blank" rel="noopener noreferrer"> JavaScript30 course</a>.
      </p>
      <section className="flex-wrap-container">
        <Card img={drumKitImg} altText="drum set" title="Day 1: Drum Kit" path="/javascript30/1"/>
        <Card img={clockImg} altText="css clock" title="Day 2: CSS + JS Clock" path="/javascript30/2"/>
        <Card img={day3Img} altText="screenshot of filters for image" title="Day 3: Playing with CSS Variables and JS" path="/javascript30/3"/>
        <Card img={day4Img} altText="screenshot of javascript reduce method" title="Day 4: Array Cardio Day 1" path="/javascript30/4"/>
        <Card img={day5Img} altText="screenshot of flex image gallery" title="Day 5: Flex Panels Image Gallery" path="/javascript30/5"/>
        <Card img={day6Img} altText="screenshot of ajax typeahead" title="Day 6: AJAX Type Ahead" path="/javascript30/6"/>
        <Card img={day7Img} altText="screenshot of javascript array methods" title="Day 7: Array Cardio Day 2" path="/javascript30/7"/>
        <Card img={day8Img} altText="screenshot of HTML5 Canvas" title="Day 8: Fun with HTML5 Canvas" path="/javascript30/8"/>
        <Card img={day9Img} altText="screenshot of styling in JS console" title="Day 9: 14 Must-Know Dev Tools Tricks" path="/javascript30/9"/>
        <Card img={day10Img} altText="screenshot of inbox-style checkboxes" title="Day 10: Hold Shift to Check Multiple Checkboxes" path="/javascript30/10"/>
        <Card img={day11Img} altText="screenshot of custom video player" title="Day 11: Custom HTML5 Video Player" path="/javascript30/11"/>
        <Card img={day12Img} altText="screenshot of keyup event handler" title="Day 12: Key Sequence Detection" path="/javascript30/12"/>
        <Card img={day13Img} altText="image of cloud inset into article text" title="Day 13: Slide in on Scroll" path="/javascript30/13"/>
      </section>
    </div>
  )
};

export default JavaScript30;