import React from 'react';
//import downloadBtn from "../assets/icons/download.png";
import githubLogo from "../assets/logos/github-mark.png";

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
        <button className="btn-secondary"><img src={githubLogo} alt="download cv" className="download-btn"/> GitHub</button>
      </div>
    </div>
  );
}

export default Header;
