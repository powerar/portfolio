import React from 'react';

function Nav() {
  return (
    <div className="navbar-fixed">
      <nav className="#212121 grey darken-4">
        <div className="nav-wrapper container">
          <a href="#" class="brand-logo">
            ANDREW POWER
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li className="active">
              <a href="#about">About Me</a>
            </li>
            <li className="active">
              <a href="#resume">
                Experience
              </a>
            </li>
            <li className="active">
              <a href="#work">
                Work
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
