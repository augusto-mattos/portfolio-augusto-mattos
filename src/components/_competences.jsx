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
    <section id="stack" className="competences-container">
      <div className="competences">
        <div className="stack-logo">
        <img
          src={htmlLogo}
          alt="HTML"
        />
        <p>HTML</p>
        </div>
        <div className="stack-logo">
        <img
          src={cssLogo}
          alt="CSS"
        />
        <p>CSS</p>        
        </div>
        <div className="stack-logo">
        <img
          src={jsLogo}
          alt="JavaScript"
        />
        <p>JavaScript</p>
        </div>
        <div className="stack-logo">
        <img
          src={sassLogo}
          alt="Sass"
        />
          <p>Sass</p>
        </div>
        <div className="stack-logo">
        <img
          src={reactLogo}
          alt="React"
        />
        <p>React</p>
        </div>
        <div className="stack-logo">
        <img
          src={reduxLogo}
          alt="Redux"
        />
        <p>Redux</p>  
        </div>
        <div className="stack-logo">
        <img
          src={figmaLogo}
          alt="Figma"
        />
        <p>Figma</p>
        </div>
        <div className="stack-logo">
        <img
          src={psLogo}
          alt="Photoshop"
        />
        <p>Photoshop</p>
        </div>
        <div className="stack-logo">
        <img
          src={githubLogo}
          alt="GitHub"
        />
        <p>GitHub</p>
        </div>
      </div>
    </section>
  );
}

export default Competences;
