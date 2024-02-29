import ProjectTags from "./_projectTags";

function ProjectHero(props) {
  const stackList = localStorage.getItem("stack");

  return (
    <div className="project-hero">
      <div className="projet-hero-title">
        <h1>{props.title}</h1>
        <ProjectTags stack={stackList} />
      </div>
      <div className="hero-content">
        <div className="project-description">
          <p className="intro">{props.intro}</p>
          <p>{props.description}</p>
        </div>
        <img
          src={props.img}
          alt="couverture du projet"
          className="hero-img"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default ProjectHero;
