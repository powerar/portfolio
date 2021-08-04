import React, { useEffect } from 'react';

function Nav() {

  return (
      <nav className="#607d8b blue-grey">
        <div className="nav-wrappe container">
          <a href="#" class="brand-logo">
            ANDREW POWER
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="#about"
                className="btn btn-primary"
                
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="btn btn-primary"
                
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn btn-primary"
                
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="btn btn-primary"
                
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
