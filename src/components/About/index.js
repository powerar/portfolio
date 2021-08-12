import React from 'react';

function About() {
  return (
    
    <div id="about" className="container">
      <div class="parallax">
        <img
          id="parallax-img"
          src={
            require(`../../images/isaac-quesada-1AyqZcC7zSg-unsplash.jpg`).default
          }
          alt="Unsplashed background img"
        ></img>
      </div>
        <div className="container">
          <div className="center" id="about-text">
            <h3 className="white-text">About Me</h3>
            <p className="center-align">
              My name is Andrew Power and I am a Full-Stack Developer. My years
              of experience in the application support sector gives me a unique
              perspective on the importance of the user experience. Throughout
              my career I have developed exceptional client-handling skills as
              well as the ability to meet tight deadlines and engage in creative
              problem-solving. I love to learn and I bring this enthusiasm to
              every project. You can find a link to some of my projects in the
              "Work" section of this page. Additionally my development
              proficiencies are listed on the "Experience" section.
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;
