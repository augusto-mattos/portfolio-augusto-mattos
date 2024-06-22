import { useTranslation } from "react-i18next";
import ProjectsList from "./_projectsList";

function Portfolio() {
  const { t } = useTranslation();

  return (
    <section id="portfolio">
      <h3>Portfolio</h3>
      <h4>{t("portfolio-subtitle")}</h4>
      <ProjectsList />
    </section>
  );
}

export default Portfolio;
