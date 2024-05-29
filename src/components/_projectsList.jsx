import React, { useState } from "react";
import projects from "../locales/fr/fr-projects.json";
import Card from "./_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="gallery">
        {currentProjects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            project={project}
          />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="chevron" />
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          <FontAwesomeIcon icon={faChevronRight} className="chevron"/>
        </button>
      </div>
    </>
  );
}

export default ProjectsList;
