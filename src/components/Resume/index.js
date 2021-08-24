import React from 'react';

function Resume() {
  return (
    <section className="section scrollspy">
      <div className="container">
        <div className="col s12 center text-white">
          <ul>
            <li className="collection-header">
              <strong>
                <h2>Experience</h2>
              </strong>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fab fa-html5"></i>
                <span className="title">HTML5</span>
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fab fa-css3-alt"></i>
                <span className="title">CSS</span>
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fab fa-js-square"></i>
                JavaScript
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fab fa-node-js"></i>Node.js
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fab fa-react"></i>React
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fas fa-file-code"></i>
                jQuery
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fas fa-file-alt"></i>Redux
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i className="fas fa-database"></i>MongoDB
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i class="fas fa-hdd"></i>MySQL
              </h5>
            </li>
            <li className="collection-item">
              <h5>
                <i class="fas fa-project-diagram"></i>GraphQL
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
