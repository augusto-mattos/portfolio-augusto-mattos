import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import translationIcon from "../assets/icons/translation.png";
import emailIcon from "../assets/icons/fi-rr-envelope-black.png";
import Hamburger from "./_navbarHamburger";
import LanguageModal from "../components/_langSelectorModal";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveItem(null);
  }, [location.pathname]);

  const toogleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const handleLinkClick = (section) => {
    setHamburgerOpen(false);
    scrollToSection(section);
    setActiveItem(section);
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
          <div
            className="hamburger"
            onClick={toogleHamburger}
          >
            <Hamburger isOpen={hamburgerOpen} />
          </div>
          <div className="mail-navbar">
            <img
              src={emailIcon}
              className="email-icon"
              alt="email icon"
            />
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <nav
            className={`navbar-links ${hamburgerOpen ? "column-layout" : ""}`}
          >
            <Link
              to={"/#about-me"}
              onClick={() => handleLinkClick("about-me")}
              className={activeItem === "about-me" ? "active" : ""}
            >
              {t("about")}
            </Link>
            <Link
              to={"/#portfolio"}
              onClick={() => handleLinkClick("portfolio")}
              className={activeItem === "portfolio" ? "active" : ""}
            >
              {t("portfolio")}
            </Link>
            <Link
              to={"/#stack"}
              onClick={() => handleLinkClick("stack")}
              className={activeItem === "stack" ? "active" : ""}
            >
              {t("stack")}
            </Link>
            <Link
              to={"/#contact"}
              onClick={() => handleLinkClick("contact")}
              className={activeItem === "contact" ? "active" : ""}
            >
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
