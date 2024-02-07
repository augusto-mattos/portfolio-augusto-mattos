import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import emailIcon from "../assets/icons/fi-rr-envelope.png";
import phoneIcon from "../assets/icons/fi-rr-phone-call.png";
import linkedinLogo from "../assets/logos/logo-linkedin.png";
import githubLogo from "../assets/logos/github-mark-white.png";

function Footer() {
  const email = "mattos.aug@gmail.com";
  const phone = "+33 07 87 20 41 18";
  const linkedInProfile = "https://www.linkedin.com/in/augusto-mattos/";
  const githubProfile = "https://github.com/augusto-mattos";

  const contactRef = useRef(null);

  return (
    <footer className="footer">
      <div id="contact" ref={contactRef} className="contact-footer">
        <h3>Contact</h3>
        <h4>Travaillons ensemble !</h4>
        <div className="email-footer">
          <img
            src={emailIcon}
            alt="email icon"
          />
          <NavLink to={`mailto:${email}`}>{email}</NavLink>
        </div>
        <div className="phone-footer">
          <img
            src={phoneIcon}
            alt="phone icon"
          />
          <NavLink to={`tel:${phone}`}>{phone}</NavLink>
        </div>
        <div className="linkedin-footer">
          <img
            src={linkedinLogo}
            alt="likedin logo"
          />
          <NavLink
            to={linkedInProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            augusto-mattos
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="info-footer">
        <p>Designed and developed by Augusto Mattos © 2024</p>
        <div className="github-footer">
        <img
          src={githubLogo}
          alt="github logo"
        />
        <NavLink
          to={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          augusto-mattos
        </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
