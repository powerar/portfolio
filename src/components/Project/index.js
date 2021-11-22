import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Obsidiflex',
      github: 'https://github.com/jadejhagru/fitness-application',
      appLink: 'https://jadejhagru.github.io/fitness-application/',
      description:
        'A fitness application built accessing a RESTful API of workouts. Users can add workouts and their routine will be saved to localstorage.',
      build: [
        'HTML5',
        'CSS',
        'JavaScript',
        'Node',
        'Bootstrap',
        'jQuery',
        'YouTube Search API',
      ],
    },
    {
      title: 'Budget Tracker',
      github: 'https://github.com/powerar/budget-tracker/',
      appLink: 'https://gorgeous-wind-cave-29462.herokuapp.com/',
      description:
        'A simple Progressive Web Application for budget tracking that allows users to log expenses with or without an internet connection. This application was built with a Node.js back-end, and a Mongoose database. It uses service workers and caching to provide offline capabilities.',
      build: ['JavaScript', 'CSS', 'Node.js', 'Express', 'Mongoose'],
    },
    {
      title: 'Gamer Match Maker',
      github: 'https://github.com/PrimalOrB/gamer-match',
      appLink: 'https://damp-tor-80298.herokuapp.com/',
      description:
        'A customized game matchmaking service utilizing the Steam Web API. This site uses a MongoDB back-end to help users find other gamers with similar games and playtimes.',
      build: [
        'HTML5',
        'CSS',
        'JavaScript',
        'Express/Express Session',
        'Node',
        'MySQL',
        'Handlebars',
        'Sequelize',
        'Passport',
        'Steam Web API',
      ],
    },
    {
      title: 'Art Gallery Online',
      github: 'https://github.com/Stevtm/art-gallery-online',
      appLink: 'https://shrouded-sands-03163.herokuapp.com/',
      description:
        'This application is an online art gallery that allows put their original art up for sale and browse art pieces that have been posted by other users in the community. The application is built with the MERN stack with a GraphQL API. A Stripe placeholder is configured to direct users to a payment page for purchasing art.',
      build: [
        'HTML5',
        'CSS',
        'JavaScript',
        'Express',
        'Node',
        'GraphQL',
        'MongoDB',
        'Apollo Server',
        'Mongoose',
        'Firebase',
      ],
    },
  ];

  return (
    <div className="carousel carousel-slider center">
      {projects.map((project, i) => (
        <div className="carousel-item card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              src={require(`../../images/${projects[i].title}.png`).default}
              className="activator"
              alt={project.name}
              key={project.name}
            />
          </div>
          <div className="card-content">
            <span className="card-title activator black-text">
              {projects[i].title}
              <i className="material-icons right">more_vert</i>
            </span>
          </div>
          <div className="card-action">
            <a href={projects[i].appLink} className="btn btn-primary">
              App
            </a>

            <a href={projects[i].github} className="btn btn-primary">
              Github
            </a>
          </div>

          <div className="card-reveal">
            <span className="card-title black-text text-darken-4">
              {projects[i].title}
              <i className="material-icons right">close</i>
            </span>
            <p id="card-text">{projects[i].description}</p>

            <ul id="card-text">
              <strong>Built with:</strong>
              {projects[i].build.map((build) => (
                <li>{build}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
