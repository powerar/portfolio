import React, { useEffect } from 'react';

function Nav(props) {
  const { setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <header className="align-items-center bg-dark text-light">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      ></link>
      <link rel="stylesheet" href="../../index.css" type="text/css"></link>
      <h1>ANDREW POWER</h1>
      <nav className="align-items-center text-dark text-decoration-none">
          <ul className="nav justify-content-end nav-pills">
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
      </nav>
    </header>
  );
}

export default Nav;
