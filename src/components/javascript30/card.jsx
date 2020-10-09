import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Card = ({ img, altText, title, path }) => {
  return (
    <article className="card-container">
      <picture className="js30-day-card">
        <img src={img} alt={altText}/>
      </picture>
      <div className="js30-day-card card-content">
        <div className='flex-row-between'>
          <h2>{title}</h2>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <Link to={path} className="button">View</Link>
      </div>
    </article>
  );
};

export default Card;
