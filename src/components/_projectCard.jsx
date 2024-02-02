import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { id, cover, title, resume } = props.project;

  return (
    <>
      <div
        key={id}
        id={id}
        className="project-card"
      >
        <Link to={`/projet/${id}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/" + cover}
            alt="miniature projet"
            className="project-cover"
          />
          <h5>{title}</h5>
          <p>{resume}</p>
        </Link>
      </div>
    </>
  );
}

export default ProjectCard;
