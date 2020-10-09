import React from 'react';
import ReactGA from "react-ga";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faAngellist } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="flex-row-between">
      <p>© Benjamin Rose, 2020</p>
      <ul>
        <li>
          <a
            href="https://github.com/benrose207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Icon"
            onClick={() => ReactGA.event({ category: 'click', action: "github", label: 'footer' })}
          ><FontAwesomeIcon icon={faGithubSquare} /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/benjamin-rose-483549124/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Icon"
            onClick={() => ReactGA.event({ category: 'click', action: "linkedin", label: 'footer' })}
          ><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li>
          <a
            href="hhttps://angel.co/benjamin-rose-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Angellist Icon"
            onClick={() => ReactGA.event({ category: 'click', action: "angellist", label: 'footer' })}
          ><FontAwesomeIcon icon={faAngellist} /></a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;