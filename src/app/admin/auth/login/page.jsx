"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "@/config/firebase";
import visibleSvg from "@/images/visible.svg";
import hiddenSvg from "@/images/hidden.svg";
import { AlertContext } from "@/contexts/alert-context";
import { color } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const initialErrData = { email: "", psw: "" };

const initialData = { email: "", psw: "" };

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [err, setErr] = useState(initialErrData);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { alertObjState, dispatchAction } = useContext(AlertContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    if (isInputValid()) {
      setIsSubmitting(true);
      const { email, psw } = formData;

      try {
        await signInWithEmailAndPassword(auth, email, psw);

        dispatchAction(
          "login_status",
          "dynamic",
          "success",
          "Successfully Logged In"
        );

        router.push("/admin");
      } catch (err) {
        if (err.code === "auth/network-request-failed") {
          dispatchAction(
            "internet_status",
            "static",
            "fail",
            "Network error, can't connect!"
          );
          dispatchAction("login_status", "", "", "");
          dispatchAction("register_status", "", "", "");
        } else if (err.code === "auth/invalid-credential") {
          dispatchAction(
            "login_status",
            "static",
            "fail",
            "Invalid Credentials"
          );
        } else if (err.code === "auth/too-many-requests") {
          dispatchAction(
            "login_status",
            "dynamic",
            "fail",
            "Too many Invalid requests, try again later"
          );
        } else {
          dispatchAction("login_status", "dynamic", "fail", err.code);
        }
      } finally {
        setIsSubmitting(false);
      }
    } else {
      dispatchAction(
        "login_status",
        "dynamic",
        "fail",
        "Enter your credentials to sign in"
      );
    }
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    handleInputValidation(field, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleInputValidation = (field, value) => {
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const testEmail = emailRegex.test(value);
      setErr((prev) => ({
        ...prev,
        [field]:
          value.length === 0
            ? "Input is empty"
            : testEmail
            ? ""
            : "Please enter a valid email address",
      }));
    } else if (field === "psw") {
      setErr((prev) => ({
        ...prev,
        [field]: value.length === 0 ? "Input is empty" : "",
      }));
    } else {
      return;
    }
  };

  const isInputValid = () => {
    let requiredFields = Object.keys(formData).filter(
      (field) => formData[field].trim() === ""
    );

    let currentErrors = Object.keys(err).filter(
      (field) => err[field].trim() !== ""
    );
    // console.log(requiredFields.length === 0 && currentErrors.length === 0);
    return requiredFields.length === 0 && currentErrors.length === 0;
  };

  return (
    <main className={styles["main"]}>
      <section className={styles["wrapper"]}>
        <div className={styles["title"]}>
          <h1>Admin Login</h1>
          <p>Please enter your credentials to access the admin dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className={styles["form"]}>
          <div className={styles["input-box"]}>
            <span className={styles["status"]}>
              {err.email ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    fill="var(--soft-red)"
                    d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                  />
                </svg>
              ) : (
                formData.email && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      fill="var(--green)"
                      d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    />
                  </svg>
                )
              )}
            </span>
            <input
              value={formData.email}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type="email"
              className={`${formData.email !== "" ? styles["not-empty"] : ""} ${
                err.email && styles["inputError"]
              }`}
              id="email"
              name="email"
              placeholder=""
              readOnly={isSubmitting}
            />
            <label htmlFor="email">Email Address</label>
            <span className={styles["err"]}>{err.email}</span>
          </div>
          <div className={styles["input-box"]}>
            <span className={styles["status"]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setVisible((prev) => {
                    return !prev;
                  });
                }}
              >
                <Image src={!visible ? visibleSvg : hiddenSvg} alt="" />
              </button>

              {/* {err.psw ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path
                    fill="var(--soft-red)"
                    d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                  />
                </svg>
              ) : (
                formData.psw && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path
                      fill="var(--green)"
                      d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"
                    />
                  </svg>
                )
              )} */}
            </span>
            <input
              value={formData.psw}
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              type={visible ? "text" : "password"}
              className={`${formData.psw !== "" ? styles["not-empty"] : ""} ${
                err.psw && styles["inputError"]
              }`}
              id="psw"
              name="psw"
              placeholder=""
              readOnly={isSubmitting}
            />
            <label
              style={{ color: err.psw && "var(--soft-red)" }}
              htmlFor="psw"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className={`${styles.submit} ${isSubmitting || !isInputValid() ? styles["disabled"] : ""}`}
            disabled={isSubmitting || !isInputValid()}
          >
            {isSubmitting ? "Checking..." : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
