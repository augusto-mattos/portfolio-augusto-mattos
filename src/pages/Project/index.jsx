import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Error404 from "../Error404";
import { useTranslation } from "react-i18next";
import frProjects from "../../locales/fr/fr-projects.json";
import ptProjects from "../../locales/pt/pt-projects.json";

import ProjectHero from "../../components/_projectHero";
import ProjectLinks from "../../components/_projectLinks";
import ProjectActions from "../../components/_projectActions";
import Slider from "../../components/_slider";
//import ProjectTags from "../../components/_projectTags";

function Project() {
  const location = useLocation();
  const urlProjetId = location.pathname.split("/")[2];
  const [projetId, setProjetId] = useState(null);
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    function getProjectData(language, projectId) {
      const projectsData = language === "pt" ? ptProjects : frProjects;
      return projectsData.find(item => item.id === projectId);
    }

    const projectId = getProjectData(i18n.language, urlProjetId);
    setProjetId(projectId);

    if (projectId) {
      document.title = `${projectId.title} - Portfolio - Augusto Mattos`;
    }
  }, [urlProjetId, i18n.language]);

  const scrollToRef = useRef(null);
  
  useEffect(() => {
    if (scrollToRef.current) {
        scrollToRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location.pathname]);
    
    if (!projetId) {
      return <Error404 />;
    }  

  const projectName = projetId.title;
  const projectImgHero =
    process.env.PUBLIC_URL + "/images/" + projetId.pictures[0];
  const projectDescription = projetId.description;
  const projectImgActions =
    process.env.PUBLIC_URL + "/images/" + projetId.pictures[1];
  const projectActions = projetId.actions;
  const projectURL = projetId.Site;
  const projectRepo = projetId.Repo;
  const stackList = projetId.stack.join(", ");
  localStorage.setItem("stack", stackList);

  return (
    <section className="project-page" ref={scrollToRef}>
      <ProjectHero
        title={projectName}
        img={projectImgHero}
        intro={projectDescription[0]}
        description={projectDescription[1]}
      />        
      <ProjectLinks
        site={projectURL}
        repo={projectRepo}
      />
      <ProjectActions
        img={projectImgActions}
        actions={projectActions}
      />
      <hr />
      <div className="carousel-project-page">
        <h4>{t("other-projects-title")}</h4>
        <Slider />
      </div>
    </section>
  );
}

export default Project;
