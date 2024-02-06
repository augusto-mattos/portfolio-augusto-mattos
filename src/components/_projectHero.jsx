function ProjectHero(props) {
    return(
        <div className="project-hero">
        <h1>{props.title}</h1>
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
    )
}

export default ProjectHero;