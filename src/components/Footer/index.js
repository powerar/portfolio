import React from 'react';

function Footer() {
  return (
    <footer class="page-footer #212121 grey darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Made by Andrew Power</h5>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a
                  class="grey-text text-lighten-3"
                  href="https://github.com/powerar/"
                >
                  <i class="fab fa-github"></i>Github
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <i class="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021
        </div>
      </div>
    </footer>
  );
}

export default Footer;
