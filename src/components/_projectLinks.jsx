import { Link } from "react-router-dom";
import linkIcon from "../assets/icons/fi-rr-link.png";
import githubLogo from "../assets/logos/github-mark.png";

function ProjectLinks(props) {
  return (
    <div className="project-links">
      <div className="project-buttons">
      <Link
        to={props.site}
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
      >
        <img
          src={linkIcon}
          alt="lien vers le site déployé"
        />
        Découvrir le site
      </Link>
      <Link
        to={props.repo}
        target="_blank"
        rel="noreferrer"
        className="btn-primary"
      >
        <img
          src={githubLogo}
          alt="lien vers le repository"
        />
        Découvrir le code
      </Link>
      </div>
      <p>
        <strong>Stack : </strong>
        {props.stack}
      </p>
    </div>
  );
}

export default ProjectLinks;
