import { useState, useEffect } from "react";

function ProjectTags(props) {
  const [tagClasses, setTagClasses] = useState({});

  useEffect(() => {
    const classes = {};
    const tags = props.stack.split(", ").map((item) => item.trim());

    tags.forEach((tag) => {
      switch (tag) {
        case "HTML":
          classes[tag] = "html-tag";
          break;
        case "CSS":
          classes[tag] = "css-tag";
          break;
        case "Sass":
          classes[tag] = "sass-tag";
          break;
        case "JavaScript":
          classes[tag] = "js-tag";
          break;
        case "React":
          classes[tag] = "react-tag";
          break;
        case "React Router":
          classes[tag] = "react-router-tag";
          break;
        case "Redux":
          classes[tag] = "redux-tag";
          break;
        case "SEO":
          classes[tag] = "seo-tag";
          break;
        case "Photoshop":
          classes[tag] = "ps-tag";
          break;
        default:
          classes[tag] = "default-tag";
      }
    });

    setTagClasses(classes);
  }, [props.stack]);

  const stackList = props.stack
    .split(", ")
    .map((item, index) => (
      <span key={index} className={tagClasses[item.trim()]}>
        {item.trim()}
      </span>
    ));

  return <section className="stack-tags">{stackList}</section>;
}

export default ProjectTags;
