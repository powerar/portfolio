import React, { useEffect } from 'react';

function Nav(props) {
  const { setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

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
                onClick={() => setCurrentCategory('About')}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="btn btn-primary"
                onClick={() => setCurrentCategory('Work')}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={() => setCurrentCategory('Contact')}
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className="btn btn-primary"
                onClick={() => setCurrentCategory('Resume')}
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
