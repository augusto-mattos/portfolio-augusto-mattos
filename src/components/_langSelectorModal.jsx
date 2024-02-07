import React, { useState } from 'react';
import closeBtn from "../assets/icons/close-btn.png";

const LanguageModal = ({ isOpen, closeModal }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    closeModal();
  };

  return (
    <>
    {isOpen  && (
    <aside id="lang-modal">
        <button onClick={closeModal} className="close-btn"><img src={closeBtn} alt="Close modal" /></button>
        <div className="modal-content">
            <h2>Modifier la langue</h2>
            <div className="options">
                <button onClick={() => handleSelect("fr")} className={selectedLanguage === 'fr' ? 'selected' : ''}>Français</button>
                <button onClick={() => handleSelect("pt")} className={selectedLanguage === 'pt' ? 'selected' : ''} disabled>Português - em breve!</button>
                <button onClick={() => handleSelect("en")} className={selectedLanguage === 'en' ? 'selected' : ''} disabled>English - coming soon!</button>
            </div>
        </div>
    </aside>
    )}
    </>
  );
};

export default LanguageModal;
