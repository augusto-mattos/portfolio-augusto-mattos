import { NavLink } from "react-router-dom";
import linkIcon from "../assets/icons/fi-rr-link.png";
import githubLogo from "../assets/logos/github-mark.png";

function ProjectLinks(props) {
  return (
    <div className="project-links">
      <NavLink
        to={props.site}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkIcon}
          alt="lien vers le site déployé"
        />
        {props.site}
      </NavLink>
      <NavLink
        to={props.repo}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubLogo}
          alt="lien vers le repository"
        />
        {props.repo}
      </NavLink>
      <p>
        <strong>Stack : </strong>
        {props.stack}
      </p>
    </div>
  );
}

export default ProjectLinks;
