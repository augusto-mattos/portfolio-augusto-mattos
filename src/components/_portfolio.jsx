import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectsList from "./_projectsList";
import Slider from "./_slider";

function Portfolio() {
  const { t } = useTranslation();

  const [displayAllProjects, setDisplayAllProjects] = useState(false);

  const toggleDisplayProjects = () => {
    setDisplayAllProjects(!displayAllProjects);
  };

  const textButton = displayAllProjects
    ? t("portfolio-displayCarousel-btn")
    : t("portfolio-displayAll-btn");

  return (
    <section id="portfolio">
      <h3>Portfolio</h3>
      <h4>{t("portfolio-subtitle")}</h4>
      <button
        onClick={toggleDisplayProjects}
        className="btn-plus"
      >
        {textButton}
      </button>
      {displayAllProjects ? <ProjectsList /> : <Slider />}
    </section>
  );
}

export default Portfolio;
