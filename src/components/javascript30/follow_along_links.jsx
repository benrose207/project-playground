import React, { useEffect } from 'react';

const FollowAlongLinks = () => {
  useEffect(() => {
    const triggers = document.querySelectorAll('.follow-along a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    function highlightLink() {
      const linkCoords = this.getBoundingClientRect();
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
      }

      highlight.style.width = `${coords.width}px`;
      highlight.style.height = `${coords.height}px`;

      highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    }

    triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

    return () => {
      triggers.forEach(a => a.removeEventListener('mouseenter', highlightLink));
      highlight.remove();
    }
  },[]);

  return (
    <div className="content-container follow-along">
      <h1>Follow Along Links</h1>

      <nav aria-label="follow along links">
        <ul className="menu">
          <li><a href="https://benjaminrose.net/project-playground#/javascript30/22">Home</a></li>
          <li><a href="https://benjaminrose.net/project-playground#/javascript30/22">Order Status</a></li>
          <li><a href="https://benjaminrose.net/project-playground#/javascript30/22">Tweets</a></li>
          <li><a href="https://benjaminrose.net/project-playground#/javascript30/22">Read Our History</a></li>
          <li><a href="https://benjaminrose.net/project-playground#/javascript30/22">Contact Us</a></li>
        </ul>
      </nav>

      <div className="wrapper">
        <p>Lorem ipsum dolor sit amet, <a href="https://benjaminrose.net/project-playground#/javascript30/22">consectetur</a> adipisicing elit. Est <a href="https://benjaminrose.net/project-playground#/javascript30/22">explicabo</a> unde natus necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!</p>
        <p>Aspernatur sapiente quae sint <a href="https://benjaminrose.net/project-playground#/javascript30/22">soluta</a> modi, atque praesentium laborum pariatur earum <a href="https://benjaminrose.net/project-playground#/javascript30/22">quaerat</a> cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.</p>
        <p>Cum ipsam quod, incidunt sit ex <a href="https://benjaminrose.net/project-playground#/javascript30/22">tempore</a> placeat maxime <a href="https://benjaminrose.net/project-playground#/javascript30/22">corrupti</a> possimus <a href="https://benjaminrose.net/project-playground#/javascript30/22">veritatis</a> ipsum fugit recusandae est doloremque? Hic, <a href="https://benjaminrose.net/project-playground#/javascript30/22">quibusdam</a>, nulla.</p>
        <p>Esse quibusdam, ad, ducimus cupiditate <a href="https://benjaminrose.net/project-playground#/javascript30/22">nulla</a>, quae magni odit <a href="https://benjaminrose.net/project-playground#/javascript30/22">totam</a> ut consequatur eveniet sunt quam provident sapiente dicta neque quod.</p>
        <p>Aliquam <a href="https://benjaminrose.net/project-playground#/javascript30/22">dicta</a> sequi culpa fugiat <a href="https://benjaminrose.net/project-playground#/javascript30/22">consequuntur</a> pariatur optio ad minima, maxime <a href="https://benjaminrose.net/project-playground#/javascript30/22">odio</a>, distinctio magni impedit tempore enim repellendus <a href="https://benjaminrose.net/project-playground#/javascript30/22">repudiandae</a> quas!</p>
      </div>
    </div>
  );
};

export default FollowAlongLinks;
