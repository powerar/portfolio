import React, { useEffect } from 'react';

function Nav (props) {
  const { setCurrentCategory, currentCategory } = props;

  useEffect(() => {
      document.title = currentCategory;
  }, [currentCategory]);

  return (
    <header className="d-flex flex-wrap bg-dark text-light">
      <h1>ANDREW POWER</h1>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <ul>
            <li>
              <a href="#about" onClick={() => setCurrentCategory("About")}>About Me</a>
            </li>
            <li>
              <a href="#work" onClick={() => setCurrentCategory("Work")}>Work</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setCurrentCategory("Contact")}>Contact Me</a>
            </li>
            <li>
              <a href="#resume" onClick={() => setCurrentCategory("Resume")}>Resume</a>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
