function ProjectActions(props) {
  return (
    <div className="project-actions">
      <img
        src={props.img}
        alt="actions dans le projet"
      />
      <div className="actions-liste">
        <h3>Mis en œuvre</h3>
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
