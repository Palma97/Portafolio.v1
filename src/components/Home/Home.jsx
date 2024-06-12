import React from "react";
import "./Home.css";
import computer from "../../Images/imageComputer.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navigate = useNavigate();

  const navigateProjects = () => {
    navigate("/projects");
  };

  const navigateStudies = () => {
    navigate("/studies");
  };

  const navigateAbout = () => {
    navigate("/about");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <motion.div
      className="container1"
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ x: window.innerHeight, transition: { duration: 0.2 } }}
    >
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className="buttonLight"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <div className="container">
        <div className="text">{t("TITLEHOME")}</div>
        <div className="buttons">
          <button onClick={navigateProjects} className="button">
            {t("BUTTONPROJECTS")}
          </button>
          <button onClick={navigateStudies} className="button">
            {t("BUTTONSTUDIES")}
          </button>
          <button onClick={navigateAbout} className="button">
            {t("BUTTONABOUT")}
          </button>
          <button onClick={navigateContact} className="button">
            {t("BUTTONCONTACT")}
          </button>
        </div>
      </div>
      {<img src={computer} alt="Not found" className="computer" />}
    </motion.div>
  );
};
