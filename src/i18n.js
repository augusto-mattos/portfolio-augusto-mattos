import i18n from "i18next";

import frProjects from "../src/locales/fr/fr-projects.json";
import frModal from "../src/locales/fr/fr-lng-modal.json";
import frNavbar from "../src/locales/fr/fr-navbar.json";
import frHome from "../src/locales/fr/fr-home.json";

import ptNavbar from "../src/locales/pt/pt-navbar.json";
import ptProjects from "../src/locales/pt/pt-projects.json";
import ptModal from "../src/locales/pt/pt-lng-modal.json";
import ptHome from "../src/locales/pt/pt-home.json";

import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: "fr", 
        fallbacklng: "pt",
        resources: {
            fr: {
                translation: {
                    ...frProjects,
                    ...frModal,
                    ...frNavbar,
                    ...frHome,
                  }
            },
            pt:  {
                translation: {
                    ...ptProjects,
                    ...ptModal,
                    ...ptNavbar,
                    ...ptHome,
                  },
            }
        },
        interpolation: {
            escapeValue: false 
        },
    });

export default i18n;