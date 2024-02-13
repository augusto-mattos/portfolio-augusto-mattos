import { Link } from "react-router-dom";

function Card(props) {
  const { id, cover, title } = props.project;
  return (
    <Link
      to={`/projet/${id}`}
      key={id}
    >
      <div
        id={id}
        className="project-card"
      >
        <span>{title}</span>
        <div className="card-overlay" />
        <img
          src={process.env.PUBLIC_URL + "/images/" + cover}
          alt={`slide du projet ${title}`}
          loading="lazy"
        />
      </div>
    </Link>
  );
}

export default Card;
