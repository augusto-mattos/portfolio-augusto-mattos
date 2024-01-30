import React from 'react';
import downloadBtn from "../assets/icons/download.png";

function Header() {

  const scrollToContact = () => {    
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header">
      <div className="header-title">
        <h1>Augusto Mattos</h1>
        <h2>Développeur Web</h2>
      </div>
      <div className="header-copy">
        <p>
          Spécialisé en React.js, je développe des expériences web de qualité alliant performance, SEO optimisé et accessibilité.
        </p>
      </div>
      <div className="button-header">
        <button className="btn-primary" onClick={scrollToContact}>Contactez-moi !</button>
        <button className="btn-secondary">Download CV <img src={downloadBtn} alt="download cv" className="download-btn"/> </button>
      </div>
    </div>
  );
}

export default Header;
