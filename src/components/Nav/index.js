import React, { useEffect } from 'react';

function Nav(props) {
  const { setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <header className="d-flex flex-wrap justify-content-center bg-dark text-light">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"
      ></link>
      <link rel="stylesheet" href="../../index.css"></link>
      <h1>ANDREW POWER</h1>
      <nav className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <div className="container">
          <ul className="nav nav-pills">
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
    </header>
  );
}

export default Nav;
