import React, { useEffect } from 'react';
import drumKitImg from '../../assets/images/drum-kit.jpg';
import clockImg from '../../assets/images/clock.jpg';
import day3Img from '../../assets/images/js30_day3.png';
import day4Img from '../../assets/images/js30_day4.png';
import day5Img from '../../assets/images/js30_day5.png';
import day6Img from '../../assets/images/js30_day6.png';
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
      <section className="flex-wrap-container">
        <Card img={drumKitImg} altText="drum set" title="Day 1: Drum Kit" path="/javascript30/1"/>
        <Card img={clockImg} altText="css clock" title="Day 2: CSS + JS Clock" path="/javascript30/2"/>
        <Card img={day3Img} altText="screenshot of filters for image" title="Day 3: Playing with CSS Variables and JS" path="/javascript30/3"/>
        <Card img={day4Img} altText="screenshot of javascript reduce method" title="Day 4: Array Cardio Day 1" path="/javascript30/4"/>
        <Card img={day5Img} altText="screenshot of flex image gallery" title="Day 5: Flex Panels Image Gallery" path="/javascript30/5"/>
        <Card img={day6Img} altText="screenshot of ajax typeahead" title="Day 6: AJAX Type Ahead" path="/javascript30/6"/>
      </section>
    </div>
  )
};

export default JavaScript30;