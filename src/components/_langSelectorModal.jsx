import React, { useState } from 'react';
import closeBtn from "../assets/icons/close-btn.png";

import { useTranslation } from 'react-i18next';
import "../i18n";

const LanguageModal = ({ isOpen, closeModal }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const  {t, i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    closeModal();
  }

  return (
    <>
    {isOpen  && (
    <aside id="lang-modal">
        <button onClick={closeModal} className="close-btn"><img src={closeBtn} alt="Close modal" /></button>
        <div className="modal-content">
            <h2>{t("modal.title")}</h2>
            <div className="options">
                <button onClick={() => changeLanguage("fr")} className={selectedLanguage === 'fr' ? 'selected' : ''}>Français</button>
                <button onClick={() => changeLanguage("pt")} className={selectedLanguage === 'pt' ? 'selected' : ''}>Português - em breve!</button>
                <button onClick={() => changeLanguage("en")} className={selectedLanguage === 'en' ? 'selected' : ''} disabled>English - coming soon!</button>
            </div>
        </div>
    </aside>
    )}
    </>
  );
};

export default LanguageModal;
