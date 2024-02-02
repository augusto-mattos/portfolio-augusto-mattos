import { useState, useEffect } from "react";
import ProjectsCarousel from "./_projectsCarousel";
import ProjectsList from "./_projectsList";

function Portfolio() {
  const [displayAllProjects, setDisplayAllProjects] = useState(window.innerWidth <= 1024);

  // muda o state para exibir a lista de projetos ou o carrossel. É chamado no botao acima da galeria
  const toggleDisplayProjects = () => {
    setDisplayAllProjects(!displayAllProjects);
  };

  // altera o texto do botao que alterna o modo de visualizacao 
  const textButton = displayAllProjects ? "Voir carrousel" : "Voir tous";

  // considera o tamanho da tela para exibir a galeria sem a opcao do carrossel
  useEffect(() => {
    const handleResize = () => {
      setDisplayAllProjects(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="portfolio">
      <h3>Portfolio</h3>
      <h4>Consultez mon portfolio</h4>
      <button onClick={toggleDisplayProjects} className="btn-plus">
        {textButton}
      </button>
      {displayAllProjects ? <ProjectsList /> : <ProjectsCarousel />}
    </div>
  );
}

export default Portfolio;
