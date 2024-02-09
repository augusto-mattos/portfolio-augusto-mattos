import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";
import arrowLeft from "../assets/icons/arrow-left.png";
import arrowRight from "../assets/icons/arrow-right.png";

function Slider() {
  const sliderRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const slideInterval = 6000;

  useEffect(() => {
    const slideTimer = setInterval(() => {
      swipeLeft();
    }, slideInterval);

    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;
    const xDiff = e.touches[0].clientX - startX;
    if (xDiff > 50) {
      swipeRight();
    } else if (xDiff < -50) {
      swipeLeft();
    }
    setStartX(null);
  };

  const swipeLeft = () => {
    if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth === sliderRef.current.scrollWidth) {
      sliderRef.current.scrollLeft = 0;
    } else {
      sliderRef.current.scrollLeft += 350;
    }
  };
  

  const swipeRight = () => {
    sliderRef.current.scrollLeft -= 350;
  };

  return (
    <div
      className="slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <button className="arrow-previous-project" onClick={swipeRight}>
        <img src={arrowLeft} alt="previous project" />
      </button>
      <div className="slider" ref={sliderRef}>
        {projects.map((project) => (
          <Link to={`/projet/${project.id}`} key={project.id}>
            <div
              id={project.id}
              className="project-slide"
            >
              <span>{project.title}</span>
              <div className="slide-overlay" />
              <img
                src={process.env.PUBLIC_URL + "/images/" + project.cover}
                alt={`slide du projet ${project.title}`}
              />
            </div>
          </Link>
        ))}
      </div>
      <button className="arrow-next-project" onClick={swipeLeft}>
        <img src={arrowRight} alt="next project" />
      </button>
    </div>
  );
}

export default Slider;
