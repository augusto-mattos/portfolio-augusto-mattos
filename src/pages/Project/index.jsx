import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Error404 from "../Error404";
import data from "../../data/projects.json";

import ProjectHero from "../../components/_projectHero";
import ProjectLinks from "../../components/_projectLinks";
import ProjectActions from "../../components/_projectActions";
import ProjectsCarousel from "../../components/_projectsCarousel";

function Project() {
  const location = useLocation();
  const urlProjetId = location.pathname.split("/")[2];
  const projetId = data.find((item) => item.id === urlProjetId);

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


  return (
    <div className="project-page" ref={scrollToRef}>
      <ProjectHero
        title={projectName}
        img={projectImgHero}
        intro={projectDescription[0]}
        description={projectDescription[1]}
      />        
      <ProjectLinks
        site={projectURL}
        repo={projectRepo}
        stack={stackList}
      />
      <ProjectActions
        img={projectImgActions}
        actions={projectActions}
      />
      <hr />
      <div className="carousel-project-page">
        <h4>D'autres projets</h4>
        <ProjectsCarousel />
      </div>
    </div>
  );
}

export default Project;