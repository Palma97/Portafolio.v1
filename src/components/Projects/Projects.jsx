import "./Projects.css";
import blogs from "../../Images/Blogs3.png";
import blogBack from "../../Images/BlogBack.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container3"
      initial={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="item">
        <div className="layer">
          <h2 className="h2Projects">{t("INDIVIDUALPROJECT")}</h2>
          <p>{t("INDIVIDUALCONTAIN")}</p>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://github.com/Palma97/VideogamesPi"
            >
              {t("SHOWMORE")}
            </a>
          </span>
        </div>
        <h4>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="links"
            href="https://github.com/Palma97/VideogamesPi"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="item">
        <div className="layer">
          <h2 className="h2Projects">{t("GRUPALPROJECT")}</h2>
          <p>{t("GRUPALCONTAIN")}</p>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://stringsandkeys.up.railway.app/"
            >
              {t("SHOWMORE")}
            </a>
          </span>
        </div>
        <h4>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="links"
            href="https://stringsandkeys.up.railway.app/"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="item">
        <div className="layer">
          <h2 className="h2Projects">{t("AXESDEV")}</h2>
          <p>{t("AXESCONTAIN")}</p>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="fa-solid fa-gears"
              href="https://www.axesdev.com/"
            >
              {t("SHOWMORE")}
            </a>
          </span>
        </div>
        <h4>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="links"
            href="https://www.axesdev.com/"
          >
            {t("LINK")}
          </a>
        </h4>
      </div>
      <div className="containerBlogs">
        <img className="imageBlogs" src={blogs} alt="Not found" />
        <img className="imageBlogsBack" src={blogBack} alt="Not found" />
      </div>
    </motion.div>
  );
}

export default Projects;
