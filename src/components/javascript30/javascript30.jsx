import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import drumKitImg from '../../assets/images/drum-kit.jpg';
import '../../assets/stylesheets/javascript30.css';

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
    const cards = document.querySelectorAll('.card-container');
    cards.forEach(card => card.addEventListener('click', slideIn));

    const cardHeaders = document.querySelectorAll('.card-container h2');
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
        <article className="card-container">
          <picture className="js30-day-card">
            <img src={drumKitImg} alt="drum set"/>
          </picture>
          <div className="js30-day-card card-content">
            <h2>Day 1: Drum Kit</h2>
            <Link to="/javascript30/1" className="button">View</Link>
          </div>
        </article>
      </section>
    </div>
  )
};

export default JavaScript30;