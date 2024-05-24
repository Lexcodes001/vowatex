'use client';
import Image from "next/image";
import styles from "./page.module.css";
import reviewImg from "@/images/dpF2.jpg";
import { useState } from "react";

const defaultInputs = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  channel: "",
  request: "",
};

const defaultErr = {
  firstName: "",
  lastName: "",
  email: "",
};

const ContactPip = () => {
  const [formData, setFormData] = useState(defaultInputs);
  const [err, setErr] = useState(defaultErr);

  const handleInputValidation = (inputName, inputValue) => {
    if (inputName === "firstName" || inputName === "lastName") {
      const nameRegex = /^[a-zA-Z]+$/;
      const testName = nameRegex.test(inputValue);

      setErr((prev) => ({
        ...prev,
        [inputName]:
          inputValue.length === 0
            ? "Input is empty"
            : testName
            ? ""
            : "Input should not have any number or special character",
      }));
    } else if (inputName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const testEmail = emailRegex.test(inputValue);
      setErr((prev) => ({
        ...prev,
        [inputName]:
          inputValue.length === 0
            ? "Input is empty"
            : testEmail
            ? ""
            : "Please enter a valid email address",
      }));
    } else {
      return;
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleChange = (e) => {
    e.preventDefault();

    switch (e.target.name) {
      case "firstName":
      case "lastName":
      case "email":
      case "tel":
      case "channel":
      case "request":
        handleInputValidation(e.target.name, e.target.value);
        handleInputChange(e.target.name, e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <section className={styles["cip-main"]}>
      <header>Get in touch</header>
      <div className={styles["intro"]}>
        <p>
          Let&apos;s discuss your YouTube content goals. Scale with a dedicated
          Vowatex manager.
        </p>
        <ol>
          <li>Custom scriptwriter vetting and management</li>
          <li>High volume and high quality YouTube scripts</li>
          <li>Consistent YouTube publishing schedules</li>
          <li>Premium YouTube channel support</li>
        </ol>
      </div>

      <div className={styles["form"]}>
        <form action="#">
          <div className={`${styles["input"]} input`}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`${err.firstName ? styles["inputError"] : ''} ${formData.firstName !== '' ? styles['not-empty'] : ''}`}
              value={formData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
            <span className={styles["err"]}>{err.firstName}</span>
          </div>
          <div className={`${styles["input"]} input`}>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={`${err.lastName ? styles["inputError"] : ''} ${formData.lastName !== '' ? styles['not-empty'] : ''}`}
              value={formData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
            <span className={styles["err"]}>{err.lastName}</span>
          </div>
          <div className={`${styles["input"]} input`}>
            <input
              type="email"
              name="email"
              id="email"
              className={`${err.email ? styles["inputError"] : ''} ${formData.email !== '' ? styles['not-empty'] : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email address</label>
            <span className={styles["err"]}>{err.email}</span>
          </div>
          <div className={`${styles["input"]} input`}>
            <input
              type="tel"
              name="tel"
              id="tel"
              className={`${formData.tel !== '' ? styles['not-empty'] : ''}`}
              value={formData.tel}
              onChange={handleChange}
            />
            <label htmlFor="tel">Phone number</label>
          </div>
          <div className={`${styles["input"]} input`}>
            <input
              type="text"
              name="channel"
              id="channel"
              className={`${formData.channel !== '' ? styles['not-empty'] : ''}`}
              value={formData.channel}
              onChange={handleChange}
            />
            <label htmlFor="channel">Youtube Channel</label>
          </div>
          <div className={`${styles["input"]} input`}>
            <input
              type="text"
              name="request"
              id="request"
              className={`${formData.request !== '' ? styles['not-empty'] : ''}`}
              value={formData.request}
              onChange={handleChange}
            />
            <label htmlFor="request">Describe your content needs</label>
          </div>
          <button className={styles["submit"]}>SEND</button>
        </form>
      </div>

      <div className={styles["story"]}>
        <div className={styles["review"]}>
          <Image src={reviewImg} alt="reviewImage" />
          <p>
            &quot;The Vowatex team is cosmic and incredibly helpful. They not only
            help bring your YouTube vision to life, they truly endeavor to
            understand your channel&apos;s storytelling needs and how their
            scripting prowess can best meet those needs. They ensure the YouTube
            scripts created are not only engaging, but also purposeful.&quot;
          </p>
        </div>

        <div className={styles["details"]}>
          <p className={styles["name"]}>Zara Celestial</p>
          <p className={styles["role"]}>Galactic YouTube Creator</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPip;
