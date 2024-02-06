import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const currentUrl = location.pathname;
  const navbarProjet = currentUrl.includes("projet");

  return (
    <>
      {navbarProjet ? (
        <>
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
            <div
              className={`navbar-links ${hamburgerOpen ? "column-layout" : ""}`}
            >
              <NavLink to={"/"}>Accueil</NavLink>
              <button onClick={() => handleLinkClick("contact")}>
                Contact
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
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
            <div
              className={`navbar-links ${hamburgerOpen ? "column-layout" : ""}`}
            >
              <button onClick={() => handleLinkClick("about-me")}>
                About me
              </button>
              <button onClick={() => handleLinkClick("portfolio")}>
                Portfolio
              </button>
              <button onClick={() => handleLinkClick("stack")}>
                Compétences techniques
              </button>
              <button onClick={() => handleLinkClick("contact")}>
                Contact
              </button>
              <button onClick={openModal}>
                <img
                  src={translationIcon}
                  className="translation-icon"
                  alt="Translation Icon"
                />
              </button>
            </div>
          </div>
          <LanguageModal
            isOpen={modalIsOpen}
            closeModal={closeModal}
          />
        </>
      )}
    </>
  );
}

export default Navbar;
