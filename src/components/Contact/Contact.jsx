import "./Contact.css";
import computerForm from "../../Images/mail.png";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const defaultErrors = {
  name: "contact.nameRequired",
  lastName: "contact.lastNameRequired",
  email: "contact.emailRequired",
  validateEmail:
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
};

function Contact() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
  });

  const validators = (value, name) => {
    if (name === "email") {
      setErrors({
        ...errors,
        [name]: !defaultErrors.validateEmail.test(value)
          ? defaultErrors[name]
          : null,
      });
    } else {
      setErrors({
        ...errors,
        [name]: !value ? defaultErrors[name] : null,
      });
    }
  };

  const notify = () => {
    toast.success("Great", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.name && values.lastName && values.email) {
      emailjs
        .sendForm(
          "service_ua12jnc",
          "template_77ukcgs",
          form.current,
          "gV3evxY75z3sKopwy"
        )
        .then(
          (response) => {
            console.log("success!", response.status, response.text);
          },
          (err) => {
            console.log("failed", err);
          }
        );
      setValues({
        name: "",
        lastName: "",
        email: "",
      });
      setErrors({});
    }
  };

  const { t } = useTranslation();

  return (
    <motion.div
      className="containerContact"
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="textForm"
        initial={{ width: 0, transition: { duration: 0.5 } }}
        animate={{ width: "100%", transition: { duration: 0.5 } }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="textForm1">
          <h1 className="h1Form">{t("BUTTONCONTACT")}</h1>
          <p className="pForm">{t("TEXTCONTACT")}</p>
        </div>
        <div className="textForm2">
          <img src={computerForm} alt="Not found" className="computerForm" />
          <div className="escribeme">
            <h1>
              {t("WRITEME")}
              <br></br>
              <FaLongArrowAltRight />
            </h1>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="form"
        initial={{ width: 0, transition: { duration: 0.5 } }}
        animate={{ width: "100%", transition: { duration: 0.5 } }}
        exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
      >
        <h1 className="h1Form2">{t("DATA")}</h1>

        <form ref={form} onSubmit={handleSubmit} className="inputs" noValidate>
          <input
            name="name"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.name}
            type="text"
            placeholder="Nombre"
            className="input"
          />
          <input
            name="lastName"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.lastName}
            type="text"
            placeholder="Apellido"
            className="input"
          />
          <input
            name="email"
            onChange={(event) => handleChange(event)}
            onBlur={(event) =>
              validators(event.target.value, event.target.name)
            }
            value={values.email}
            type="email"
            placeholder="Email"
            className="input"
          />
          <button
            type="submit"
            onClick={notify}
            disabled={
              errors.name ||
              errors.lastName ||
              errors.email ||
              !values.name ||
              !values.lastName ||
              !values.email
            }
            className="buttonSend"
          >
            {t("BUTTONSEND")}
          </button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Flip}
          />
        </form>
        <div className="social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/nicolás-palma-330b2023b"
            className="icons linkedin"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Palma97"
            className="icons github"
          >
            <IoLogoGithub size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send?phone=573112513583"
            className="icons whatsapp"
          >
            <FaWhatsapp size={50} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:palmabboy3@gmail.com?subject=¡Quiero%20contactárte!&body=Hola,%20Hola!"
            className="icons gmail"
          >
            <SiGmail size={50} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
