import React, { useEffect } from 'react';
import drumKitImg from '../../assets/images/drum-kit.jpg';
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
        <Card img={drumKitImg} altText="css clock" title="Day 2: CSS + JS Clock" path="/javascript30/2"/>
      </section>
    </div>
  )
};

export default JavaScript30;