import { useState } from "react";
import ProjectsList from "./_projectsList";
import Slider from "./_slider";

function Portfolio() {
  const [displayAllProjects, setDisplayAllProjects] = useState(false);

  const toggleDisplayProjects = () => {
    setDisplayAllProjects(!displayAllProjects);
  };

  const textButton = displayAllProjects ? "Voir carrousel" : "Voir tous";

  return (
    <section id="portfolio">
      <h3>Portfolio</h3>
      <h4>Consultez mon portfolio</h4>
      <button onClick={toggleDisplayProjects} className="btn-plus">
        {textButton}
      </button>
      {displayAllProjects ? <ProjectsList /> : <Slider />}
    </section>
  );
}

export default Portfolio;
