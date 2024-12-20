import htmlLogo from "../assets/logos/html_logo.png";
import cssLogo from "../assets/logos/logo_css.png";
import jsLogo from "../assets/logos/javascript_logo.png";
import sassLogo from "../assets/logos/logo_sass.png";
import reactLogo from "../assets/logos/react_logo.png";
import reduxLogo from "../assets/logos/redux_logo.png";
import figmaLogo from "../assets/logos/figma_logo.png";
import psLogo from "../assets/logos/logo_photoshop.png";
import githubLogo from "../assets/logos/github-mark.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import firebaseLogo from "../assets/logos/firebase_logo.png";
import wordpressLogo from "../assets/logos/WordPress_logo.webp";
import wixLogo from "../assets/logos/logo-wix.webp";

const skills = [
  { src: htmlLogo, alt: "HTML", name: "HTML" },
  { src: cssLogo, alt: "CSS", name: "CSS" },
  { src: jsLogo, alt: "Javascript", name: "Javascript" },
  { src: reactLogo, alt: "React", name: "React" },
  { src: reduxLogo, alt: "Redux", name: "Redux" },
  { src: sassLogo, alt: "Sass", name: "Sass" },
  { src: tailwindLogo, alt: "Tailwind", name: "Tailwind CSS" },
  { src: figmaLogo, alt: "Figma", name: "Figma" },
  { src: psLogo, alt: "Photoshop", name: "Photoshop" },
  { src: githubLogo, alt: "Github", name: "Github" },
  { src: firebaseLogo, alt: "Firebase", name: "Firebase" },
  { src: wordpressLogo, alt: "WordPress", name: "WordPress" },
  { src: wixLogo, alt: "Wix", name: "Wix" },
];

function Competences() {
  return (
    <>
      <section className="competences-container">
        <div className="competences">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="stack-logo"
            >
              <img
                src={skill.src}
                alt={skill.alt}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Competences;
