import React from 'react';
import { useTranslation } from 'react-i18next';
import downloadBtn from "../assets/icons/download.png";

function Hero() {
  const { t } = useTranslation();
  
  const scrollToContact = () => {    
    const contactSection = document.getElementById("contact");
    
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <section className="hero">
      <div className="hero-title">
        <h1>Augusto Mattos</h1>
        <h2>{t("hero-title")}</h2>
      </div>
      <div className="hero-copy">
        <p>
          {t("hero-copy")}
        </p>
      </div>
      <div className="button-hero">
        <button className="btn-primary" onClick={scrollToContact}>{t("btn-scroll-contact")}</button>
        <a className="btn-secondary" href="/downloads/CV_Augusto-MATTOS.pdf" download>{t("btn-cv")} <img src={downloadBtn} alt="download cv" className="download-btn"/> </a>
      </div>
    </section>
  );
}

export default Hero;
