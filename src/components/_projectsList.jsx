import React from "react";
import projects from "../locales/fr/fr-projects.json";
import Card from "./_card";

function ProjectsList() {
  return (
    <>
      <div className="gallery">
        {projects.map((project) => (
          <Card
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
