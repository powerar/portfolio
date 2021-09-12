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
      title: 'E-commerce Shop',
      github: 'https://github.com/powerar/shop-shop',
      appLink: 'https://still-cliffs-40340.herokuapp.com/',
      description:
        'Shop-Shop is a MERN-stack e-commerce site. Users can filter by product, add and remove items to/from their cart, checkout, and view their order history. Checkouts are handled using the Stripe API. This application manages state using the React-Redux paradigm, and consists of a MongoDB, GraphQL and Apollo server back-end.',
      build: [
        'React',
        'JavaScript',
        'CSS',
        'Bootstrap',
        'Node.js',
        'GraphQL',
        'Apollo Server',
        'Express',
        'Redux',
        'Stripe',
      ],
    },
    {
      title: 'Budget Tracker',
      github: 'https://github.com/powerar/budget-tracker/',
      appLink: 'https://gorgeous-wind-cave-29462.herokuapp.com/',
      description:
        'A simple Progressive Web Application for budget tracking that allows users to log expenses with or without an internet connection. This application was built with a Node.js back-end, and a Mongoose database. It uses service workers and caching to provide offline capabilities.',
      build: [
        'JavaScript',
        'CSS',
        'Node.js',
        'Express',
        'Mongoose'
      ],
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
      title: 'Zoo Keepr',
      github: 'https://github.com/powerar/zookeepr',
      appLink: 'https://agile-fortress-42194.herokuapp.com/',
      description:
        'Zoo Keepr is an animal and zoo keeper tracking application with a RESTful API and Express back-end. Users can add animals, their attributes, and zookeepers to the application with full CRUD access.',
      build: [
        'HTML5',
        'CSS',
        'JavaScript',
        'Express',
        'Node'
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
