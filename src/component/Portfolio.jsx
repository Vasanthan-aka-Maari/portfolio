import React from "react";

import { projects } from "./projects";

function Portfolio() {
  return (
    <div className="card-container">
      <h1 className="title">Some of my Works</h1>

      {projects.map((project) => (
        <a key={project.id} target="_blank" href={project.website}>
          <div className="card">
            <div className="card-hero">
              <img
                className="card-img"
                src={project.image}
                alt={project.title}
              />
              <div className="card-links">
                <a className="card-link" href={project.github} target="_blank">
                  <i class="fab fa-github">
                    <span> GitHub</span>
                  </i>
                </a>
                <a className="card-link" href={project.website} target="_blank">
                  <i class="fas fa-eye">
                    <span> Website</span>
                  </i>
                </a>
              </div>
            </div>
            <div className="card-info">
              <h1 className="card-title">{project.title}</h1>
              <p className="card-text">
                {project.info}
                <br />
                <p className="card-skills">
                  <span>Technology used: </span>
                  {project.technology}
                </p>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Portfolio;
