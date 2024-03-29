import React, { useRef } from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import emailIcon from "../assets/icons/fi-rr-envelope.png";
import phoneIcon from "../assets/icons/fi-rr-phone-call.png";
import linkedinLogo from "../assets/logos/logo-linkedin.png";
import githubLogo from "../assets/logos/github-mark-white.png";

function Footer() {
  const {t} = useTranslation();
  const email = "mattos.aug@gmail.com";
  const phone = "+33787204118";
  const linkedInProfile = "https://www.linkedin.com/in/augusto-mattos/";
  const githubProfile = "https://github.com/augusto-mattos";

  const contactRef = useRef(null);

  const today = new Date();

  return (
    <footer className="footer">
      <div id="contact" ref={contactRef} className="contact-footer">
        <h3>{t("footer-title")}</h3>
        <h4>{t("footer-subtitle")}</h4>
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
          <NavLink to={`tel:${phone}`}>+33 7 87 20 41 18</NavLink>
        </div>
        <div className="linkedin-footer">
          <img
            src={linkedinLogo}
            alt="linkedin logo"
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
        <p>Designed and developed by Augusto Mattos © {today.getFullYear()}</p>
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
