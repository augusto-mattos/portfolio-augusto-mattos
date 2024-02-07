import React from 'react';
import downloadBtn from "../assets/icons/download.png";

function Hero() {

  const scrollToContact = () => {    
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="hero-title">
        <h1>Augusto Mattos</h1>
        <h2>Développeur Web</h2>
      </div>
      <div className="hero-copy">
        <p>
          Spécialisé en React.js, je développe des expériences web de qualité alliant performance, SEO optimisé et accessibilité.
        </p>
      </div>
      <div className="button-hero">
        <button className="btn-primary" onClick={scrollToContact}>Contactez-moi !</button>
        <a className="btn-secondary" href="/downloads/CV_Augusto-MATTOS.pdf" download>Download CV <img src={downloadBtn} alt="download cv" className="download-btn"/> </a>
      </div>
    </div>
  );
}

export default Hero;
