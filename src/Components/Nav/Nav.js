import React from 'react';
import './Nav.css';

const Nav = (props) => (
    <div>
        <nav className="navbar navbar-expand-lg">
  <a className="navbar-brand">A game of clicks</a>
  <ul className = "navbar-nav mr-auto">
    <li className = 'nav-item nav-message'>{props.message} </li>
    <li className = 'nav-item'>| Round: <span className = 'nav-value'>{props.round}</span> | </li>
    <li className = 'nav-item'>Score: <span className = 'nav-value'>{props.score}</span> | </li>
    <li className = 'nav-item'>Your Best Score: <span className = 'nav-value'>{props.topScore}</span></li>
  </ul>
</nav>
    </div>
);

export default Nav;