import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();

  return (
    <section id="about-me" className="about-me">
      <h3>{t("about-me-title")}</h3>
      <p>
        {t("about-me-copy.0")}
      </p>
        <p>
        {t("about-me-copy.1")}
        </p>
    </section>
  );
}

export default About;
