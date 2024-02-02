import React from "react";
import projects from "../data/projects";
import ProjectCard from "./_projectCard";

function ProjectsList() {
  return (
    <>
      <div className="gallery">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectsList;
