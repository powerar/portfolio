import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Horiseon',
      github: 'https://github.com/powerar/horiseon',
      appLink: 'https://powerar.github.io/horiseon/',
    },
    {
      title: 'Obsidiflex',
      github: 'https://github.com/jadejhagru/fitness-application',
      appLink: 'https://jadejhagru.github.io/fitness-application/',
    },
    {
      title: 'Run Buddy',
      github: 'https://github.com/powerar/run-buddy',
      appLink: 'https://powerar.github.io/run-buddy/',
    },
    {
      title: 'Gamer Match Maker',
      github: 'https://github.com/PrimalOrB/gamer-match',
      appLink: 'https://damp-tor-80298.herokuapp.com/',
    },
    {
      title: 'Deep Thoughts',
      github: 'https://github.com/powerar/deep-thoughts',
      appLink: 'https://sheltered-depths-01259.herokuapp.com/',
    },
    {
      title: 'Art Gallery Online',
      github: 'https://github.com/Stevtm/art-gallery-online',
      appLink: 'https://shrouded-sands-03163.herokuapp.com/',
    },
  ];

  return (
    <div className="flex-row">
      {projects.map((project, i) => (
        <div class="card">
          <img
            src={require(`../../images/${projects[i].title}.png`).default}
            className="card-img-top"
            alt={project.name}
            key={project.name}
          />
          <div class="card-body">
            <h5 class="card-title text-light">{projects[i].title}</h5>
            <a href={projects[i].appLink} class="btn btn-primary">App</a>
            <a href={projects[i].github} class="btn btn-primary">Github</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
