import React from 'react';
import { Link } from 'react-router-dom';
import drumKitImg from '../../assets/images/drum-kit.jpg';
import '../../assets/stylesheets/javascript30.css';

const JavaScript30 = () => {
  return (
    <div className="content-container-grid">
      <h1>JavaScript30</h1>
      <section className="flex-wrap-container">
        <article>
          <picture className="js30-day-img">
            <img src={drumKitImg} alt="drum set"/>
          </picture>
          <Link to="/javascript30/1">Day 1: Drum Kit</Link>
        </article>
      </section>
    </div>
  )
};

export default JavaScript30;