"use client";
import styles from "./page.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "@/lib/variants";

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

const Form = () => {
  const [formData, setFormData] = useState(defaultInputs);
  const [err, setErr] = useState(defaultErr);

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        title: title,
        post: post,
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

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
    <>
      <form onSubmit={handleSubmit}>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={`${err.firstName ? styles["inputError"] : ""} ${
              formData.firstName !== "" ? styles["not-empty"] : ""
            }`}
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="firstName">First Name</label>
          <span className={styles["err"]}>{err.firstName}</span>
        </motion.div>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={`${err.lastName ? styles["inputError"] : ""} ${
              formData.lastName !== "" ? styles["not-empty"] : ""
            }`}
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <span className={styles["err"]}>{err.lastName}</span>
        </motion.div>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="email"
            name="email"
            id="email"
            className={`${err.email ? styles["inputError"] : ""} ${
              formData.email !== "" ? styles["not-empty"] : ""
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
          <span className={styles["err"]}>{err.email}</span>
        </motion.div>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="tel"
            name="tel"
            id="tel"
            className={`${formData.tel !== "" ? styles["not-empty"] : ""}`}
            value={formData.tel}
            onChange={handleChange}
          />
          <label htmlFor="tel">Phone number</label>
        </motion.div>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="text"
            name="channel"
            id="channel"
            className={`${formData.channel !== "" ? styles["not-empty"] : ""}`}
            value={formData.channel}
            onChange={handleChange}
          />
          <label htmlFor="channel">Youtube Channel</label>
        </motion.div>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <textarea
            name="request"
            id="request"
            className={`${formData.request !== "" ? styles["not-empty"] : ""}`}
            value={formData.request}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="request">Describe your content needs</label>
        </motion.div>
        <button type="submit" className={styles["submit"]}>
          SEND
        </button>
      </form>
    </>
  );
};

export default Form;
