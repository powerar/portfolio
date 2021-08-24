import React from 'react';

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo left">
          ANDREW POWER
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#work" className="btn">
              Work
            </a>
          </li>
          <li>
            <a href="#experience" className="btn">
              Experience
            </a>
          </li>
          <li>
            <a href="#hero" className="btn">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
