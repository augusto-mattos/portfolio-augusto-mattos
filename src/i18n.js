import i18n from "i18next";

import frProjects from "../src/locales/fr/fr-projects.json";
import frModal from "../src/locales/fr/fr-lng-modal.json";
import frNavbar from "../src/locales/fr/fr-navbar.json";
import frHome from "../src/locales/fr/fr-home.json";
import frFooter from "../src/locales/fr/fr-footer.json";
import frPageProjet from "../src/locales/fr/fr-page-projet.json";

import ptNavbar from "../src/locales/pt/pt-navbar.json";
import ptProjects from "../src/locales/pt/pt-projects.json";
import ptModal from "../src/locales/pt/pt-lng-modal.json";
import ptHome from "../src/locales/pt/pt-home.json";
import ptFooter from "../src/locales/pt/pt-footer.json";
import ptPageProjet from "../src/locales/pt/pt-page-projet.json";

import { initReactI18next } from "react-i18next";

const userLanguage = navigator.language || navigator.userLanguage;
const initialLanguage = userLanguage.startsWith("pt") ? "pt" : "fr";

i18n
    .use(initReactI18next)
    .on('languageChanged', (lng) => {
        document.documentElement.setAttribute('lang', lng);
    })
    .init({
        lng: initialLanguage, 
        fallbacklng: "fr",
        resources: {
            fr: {
                translation: {
                    ...frProjects,
                    ...frModal,
                    ...frNavbar,
                    ...frHome,
                    ...frFooter,
                    ...frPageProjet,
                  }
            },
            pt:  {
                translation: {
                    ...ptProjects,
                    ...ptModal,
                    ...ptNavbar,
                    ...ptHome,
                    ...ptFooter,
                    ...ptPageProjet,
                  },
            }
        },
        interpolation: {
            escapeValue: false 
        },
    });

export default i18n;