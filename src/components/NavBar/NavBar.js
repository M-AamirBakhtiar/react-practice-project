import React from 'react';
import './navbar.scss';
import Logo from '../../logo.svg';
export default function NavBar() {
  return (
    <nav className="navbar">
      <img className="navbar__img" src={Logo} alt="City tours Logo" />
      <ul className="navbar__links">
        <li>
          <a href="/" className="navbar__link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link navbar__link-active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
