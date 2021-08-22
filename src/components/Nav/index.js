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
            <a href="about" className="btn">
              About Me
            </a>
          </li>
          <li>
            <a href="#resume" className="btn">
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className="btn">
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
