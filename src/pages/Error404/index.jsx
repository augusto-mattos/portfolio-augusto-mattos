import cat404 from "../../assets/images/404-adorable-chaton-clavier.webp";

function Error404() {
  return (
    <div className="error-container">
      <div className="error-message">
        <p>404</p>
        <span>Not found</span>
      <a href="/">Revenir à l’accueil</a>
      </div>
      <div className="error-image">
        <img
            src={cat404}
            alt="error 404 - page not fount"
        />
      </div>
    </div>
  );
}

export default Error404;
