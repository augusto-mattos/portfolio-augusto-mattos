import { NavLink } from "react-router-dom";
import translationIcon from "../assets/icons/translation.png";
import emailIcon from "../assets/icons/fi-rr-envelope-black.png";

function Navbar() {
  const email = "mattos.aug@gmail.com";

  return (
    <>
      <div className="navbar">
        <div className="mail-navbar">
          <img
            src={emailIcon}
            className="email-icon"
            alt="email icon"
          />
          <NavLink to={`mailto:${email}`}>{email}</NavLink>
        </div>
        <div className="navbar-links">
          <NavLink to="#">About me</NavLink>
          <NavLink to="#">Portfolio</NavLink>
          <NavLink to="#">Compétences techniques</NavLink>
          <NavLink to="#">Contact</NavLink>
          <NavLink to="#">
            <img
              src={translationIcon}
              className="translation-icon"
              alt="Translation Icon"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
