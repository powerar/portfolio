import React from 'react';

function Footer() {
  return (
    <footer className="page-footer #212121 grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Made by Andrew Power</h5>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/powerar/"
                >
                  <i className="fab fa-github"></i>Github
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Copyright Andrew Power</div>
      </div>
    </footer>
  );
}

export default Footer;
