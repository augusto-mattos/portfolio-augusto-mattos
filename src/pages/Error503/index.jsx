/* eslint-disable jsx-a11y/iframe-has-title */
function Error503() {
  return (
    <div className="error-container">
      <div className="error-message">
        <p>
          Ce site est en construction.
        </p>
          <span>
            Vous pouvez profiter d'un peu de musique en attendant :)
          </span>
      </div>
      <iframe
        src="https://open.spotify.com/embed/playlist/47KXgL3u6tTXp0t98lCAKw?utm_source=generator&theme=0"
        width="50%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default Error503;
