import React from "react";
import ProjectCard from "./_projectCard";

function ProjectsList() {
  return (
    <>
    <button className="btn-plus">Voir tous</button>
    <div className="gallery">
      <ProjectCard />
    </div>
    </>
  );
}

export default ProjectsList;
