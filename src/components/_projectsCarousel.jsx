import React, { useState, useEffect } from "react";
import projects from "../data/projects";
import ProjectCard from "./_projectCard";
import arrowLeft from "../assets/icons/arrow-left.png";
import arrowRight from "../assets/icons/arrow-right.png";

function ProjectsCarousel() {
    
  const cardsPerPage = 3;
  const slideInterval = 5000;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? projects.length - (projects.length % cardsPerPage) || cardsPerPage
        : (prevIndex - 1) % projects.length
    );
  };

  useEffect(() => {
    const slideTimer = setInterval(() => {
      nextCard();
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, [currentIndex]);

  const startIndex = currentIndex % projects.length;
  const endIndex = (startIndex + cardsPerPage) % projects.length;

  const visibleProjects =
    startIndex < endIndex
      ? projects.slice(startIndex, endIndex)
      : [...projects.slice(startIndex), ...projects.slice(0, endIndex)];

  return (
    <>
      <div className="carousel">
        <button className="arrow-previous-project" onClick={prevCard}>
        <img
            src={arrowLeft}
            alt="previous project"
        />
        </button>
        <div className="carousel-container">
          {visibleProjects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              className={`carousel-slide ${
                project.id === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <button className="arrow-next-project" onClick={nextCard}>
            <img
            src={arrowRight}
            alt="next project"
            />
        </button>
      </div>
    </>
  );
}

export default ProjectsCarousel;
