import htmlLogo from "../assets/logos/html_logo.png";
import cssLogo from "../assets/logos/logo_css.png";
import jsLogo from "../assets/logos/javascript_logo.png";
import sassLogo from "../assets/logos/logo_sass.png";
import reactLogo from "../assets/logos/react_logo.png";
import reduxLogo from "../assets/logos/redux_logo.png";
import figmaLogo from "../assets/logos/figma_logo.png";
import psLogo from "../assets/logos/logo_photoshop.png";
import githubLogo from "../assets/logos/github-mark.png";

function Competences() {
  return (
    <div className="competences-container">

    <div className="competences">
      <img
        src={htmlLogo}
        alt="HTML"
      />
      <img
        src={cssLogo}
        alt="CSS"
      />
      <img
        src={jsLogo}
        alt="JavaScript"
      />
      <img
        src={sassLogo}
        alt="Sass"
      />
      <img
        src={reactLogo}
        alt="React"
      />
      <img
        src={reduxLogo}
        alt="Redux"
      />
      <img
        src={figmaLogo}
        alt="Figma"
      />
      <img
        src={psLogo}
        alt="Photoshop"
      />
      <img
        src={githubLogo}
        alt="GitHub"
      />
    </div>
    </div>
  );
}

export default Competences;
