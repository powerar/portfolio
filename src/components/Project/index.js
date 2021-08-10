import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Obsidiflex',
      github: 'https://github.com/jadejhagru/fitness-application',
      appLink: 'https://jadejhagru.github.io/fitness-application/',
      description:
        'A fitness application built accessing a RESTful API of workouts. Users can add workouts and their routine will be saved to localstorage.',
    },
    {
      title: 'Gamer Match Maker',
      github: 'https://github.com/PrimalOrB/gamer-match',
      appLink: 'https://damp-tor-80298.herokuapp.com/',
      description:
        'A customized game matchmaking service utilizing the Steam Web API. This site uses a MongoDB back-end to help users find other gamers with similar games and playtimes.',
    },
    {
      title: 'Art Gallery Online',
      github: 'https://github.com/Stevtm/art-gallery-online',
      appLink: 'https://shrouded-sands-03163.herokuapp.com/',
      description:
        'This application is an online art gallery that allows put their original art up for sale and browse art pieces that have been posted by other users in the community. The application is built with the MERN stack with a GraphQL API. A Stripe placeholder is configured to direct users to a payment page for purchasing art.',
    },
  ];

  return (
    <div className="row" id="card-container">
      {projects.map((project, i) => (
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img
              src={require(`../../images/${projects[i].title}.png`).default}
              className="activator"
              alt={project.name}
              key={project.name}
            />
          </div>
          <div className="card-content">
              <span className="card-title activator">
                {projects[i].title}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={projects[i].appLink}>App</a>
              </p>
              <p>
                <a href={projects[i].github}>Github</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title">
                {projects[i].title}
                <i className="material-icons">close</i>
              </span>
              <p>{projects[i].description}</p>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Project;
