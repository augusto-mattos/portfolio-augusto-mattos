import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import translationIcon from "../assets/icons/translation.png";
import emailIcon from "../assets/icons/fi-rr-envelope-black.png";
import Hamburger from "./_navbarHamburger";
import LanguageModal from "../components/_langSelectorModal";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleLinkClick = (section) => {
    setHamburgerOpen(false);
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    const sectionRef = document.getElementById(section);

    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setHamburgerOpen(false);
  };

  const email = "mattos.aug@gmail.com";

  const { t } = useTranslation();

  return (
    <>
      <header className={`header ${hamburgerOpen ? "hamburger-is-open" : ""}`}>
        <div className={`navbar ${hamburgerOpen ? "column-layout" : ""}`}>
          <div className="hamburger" onClick={toogleHamburger}>
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <div className="mail-navbar">
            <img src={emailIcon} className="email-icon" alt="email icon" />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <nav className={`navbar-links ${hamburgerOpen ? "column-layout" : ""}`}>
            <Link to={"/"} onClick={() => handleLinkClick("about-me")}>
               {t("about")}
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("portfolio")}>
              {t("portfolio")}
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("stack")}>
              {t("stack")}
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("contact")}>
              {t("contact")}
            </Link>
            <button onClick={openModal}>
              <img
                src={translationIcon}
                className="translation-icon"
                alt="Translation Icon"
              />
            </button>
          </nav>
        </div>
      </header>
      <LanguageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
}

export default Navbar;
