import React from 'react';

function Resume() {
  return (
    <section id="resume" className="section scrollspy">
      <div className="container">
        <div className="col s12 center">
          <ul>
            <li class="collection-header">
              <h2>Experience</h2>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fab fa-html5"></i>
                <span className="title">HTML5</span>
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fab fa-css3-alt"></i>
                <span className="title">CSS</span>
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fab fa-js-square"></i>
                JavaScript
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fab fa-node-js"></i>Node.js
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fab fa-react"></i>React
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fas fa-file-code"></i>
                jQuery
              </h4>
            </li>
            <li className="collection-item">
              <h4>
                <i class="fas fa-file-alt"></i>Redux
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
