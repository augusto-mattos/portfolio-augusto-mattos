import React, { useRef, useState } from 'react';
import translationIcon from "../assets/icons/translation.png";
import emailIcon from "../assets/icons/fi-rr-envelope-black.png";
import LanguageModal from "../components/_langSelectorModal";

function Navbar() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const createScrollToSection = (ref) => (section) => {
    const sectionRef = document.getElementById(section);

    if (sectionRef) {
      ref.current = sectionRef;
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const competencesRef = useRef(null);

  const scrollToContact = createScrollToSection(contactRef);
  const scrollToAboutMe = createScrollToSection(aboutRef);
  const scrollToPortfolio = createScrollToSection(portfolioRef);
  const scrollToCompetences = createScrollToSection(competencesRef);

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
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="navbar-links">
          <button onClick={() => scrollToAboutMe("about-me")}>About me</button>
          <button onClick={() => scrollToPortfolio("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToCompetences("stack")}>Compétences techniques</button>
          <button onClick={() => scrollToContact("contact")}>Contact</button>
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
  );
}

export default Navbar;
