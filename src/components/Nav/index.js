import React, { useEffect } from 'react';

function Nav(props) {
  const { setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo left">
          ANDREW POWER
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="#about"
              onClick={() => setCurrentCategory('About')}
              className="btn btn-primary"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => setCurrentCategory('Experience')}
              className="btn btn-primary"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={() => setCurrentCategory('Work')}
              className="btn btn-primary"
            >
              Work
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
