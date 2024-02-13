function ProjectActions(props) {
  return (
    <div className="project-actions">
      <img
        src={props.img}
        alt="actions dans le projet"
        loading="lazy"
      />
      <div className="actions-list">
        <h3>Modus operandi</h3>
        <ul>
          {props.actions.map((action) => (
            <li>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectActions;
