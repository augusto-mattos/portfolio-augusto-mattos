import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <header className={`${hamburgerOpen ? "hamburger-is-open" : ""}`}>
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
              About me
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("portfolio")}>
              Portfolio
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("stack")}>
              Compétences techniques
            </Link>
            <Link to={"/"} onClick={() => handleLinkClick("contact")}>
              Contact
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
