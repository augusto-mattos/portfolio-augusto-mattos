import React, { useState } from "react";
import projects from "../locales/fr/fr-projects.json";
import Card from "./_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSort } from "@fortawesome/free-solid-svg-icons";

function ProjectsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isAscending, setIsAscending] = useState(false);
  const projectsPerPage = 6;

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.update.split('/').reverse().join('-'));
    const dateB = new Date(b.update.split('/').reverse().join('-'));
    return isAscending ? dateA - dateB : dateB - dateA;
  });

  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = sortedProjects.slice(
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

  const toggleOrder = () => {
    setIsAscending(!isAscending);
  };

  return (
    <>
      <div className="controls">
        <button onClick={toggleOrder} className="btn-plus">
          <FontAwesomeIcon icon={faSort} className="sort-icon" />
          {isAscending ? "Voir du plus au moins récent" : "Voir du moins au plus récent"}
        </button>
      </div>
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
