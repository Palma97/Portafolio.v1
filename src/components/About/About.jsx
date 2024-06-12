import "./About.css";
import htmlFondo from "../../Images/htmlFondo.png";
import { motion } from "framer-motion";
import { IoIosLink } from "react-icons/io";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="containerr"
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="smallContainer">
        <h1 className="title">{t("BUTTONABOUT")}</h1>
        <div className="textAbout">{t("TEXTABOUT")}</div>
        <a
          href="https://drive.google.com/file/d/1iOqu28J0edTczPpNFKnYE7esMkK2o0j_/view"
          target="_blank"
          className="curriculumButton"
        >
          {" "}
          <IoIosLink /> Curriculum vitae
        </a>
      </div>
      <div className="htmlFondo">
        <img className="imgHtml" src={htmlFondo} alt="Not found" />
      </div>
    </motion.div>
  );
}

export default About;
