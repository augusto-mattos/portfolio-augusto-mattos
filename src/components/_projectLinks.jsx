import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import linkIcon from "../assets/icons/fi-rr-link.png";
import githubLogo from "../assets/logos/github-mark.png";

function ProjectLinks(props) {
  const { t } = useTranslation();

  return (
    <div className="project-links">
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
        {t("deployed-site-btn")}
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
        {t("repository-btn")}
      </Link>
    </div>
  );
}

export default ProjectLinks;
