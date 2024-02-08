import { useEffect } from "react";

function ProjectTags(props) {
  useEffect(() => {
    const spanTags = document.querySelectorAll("span");

    spanTags.forEach((tag) => {
      const text = tag.textContent.trim();
      if (text === "HTML") {
        tag.classList.add("html-tag");
      }
      if (text === "CSS") {
        tag.classList.add("css-tag");
      }
      if (text === "Sass") {
        tag.classList.add("sass-tag");
      }
      if (text === "JavaScript") {
        tag.classList.add("js-tag");
      }
      if (text === "React") {
        tag.classList.add("react-tag");
      }
      if (text === "React Router") {
        tag.classList.add("react-router-tag");
      }
      if (text === "API Rest") {
        tag.classList.add("api-tag");
      }
      if (text === "Redux") {
        tag.classList.add("redux-tag");
      }
      if (text === "SEO") {
        tag.classList.add("seo-tag");
      } 
    });
  }, []);

  const stackList = props.stack
    .split(", ")
    .map((item, index) => <span key={index}>{item}</span>);

  return <section className="stack-tags">{stackList}</section>;
}

export default ProjectTags;
