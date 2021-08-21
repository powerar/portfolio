import React from 'react';

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="#" class="brand-logo left">
          ANDREW POWER
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#about" className="btn btn-primary">
              About Me
            </a>
          </li>
          <li>
            <a href="#resume" className="btn btn-primary">
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className="btn btn-primary">
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
