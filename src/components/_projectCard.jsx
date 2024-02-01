import React from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";

//<Link to={`/logement/${project.id}`}></Link>

function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          id={project.id}
          className="project-card"
        >
          <Link to={`/*`}>
            <img
              src={process.env.PUBLIC_URL + "/images/" + project.cover}
              alt="miniature projet"
              className="project-cover"
            />
            <h5>{project.title}</h5>
            <p>{project.resume}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
