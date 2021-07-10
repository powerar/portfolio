import React from 'react';

function Nav() {
  return (
    <header class="d-flex flex-wrap bg-dark text-light">
      <h1>ANDREW POWER</h1>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact-me">Contact Me</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
