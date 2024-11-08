"use client";
import styles from "./page.module.css";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storage } from "@/config/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { AlertContext } from "@/contexts/alert-context";
import { Variants } from "@/lib/variants";
import Image from "next/image";
import Loader from "@/app/loading";

const Form = ({ formType, jobName }) => {
  const defaultInputs = {
    firstName: "Alexanderrra",
    lastName: "Adetayo",
    email: "adetayoalexander12@gmail.com",
    tel: "09127084405",
    channel: "Lexthelearner",
    request: "I need the Algorithm to favor me!",
    resume: null,
    coverLetter: "I need the Algorithm to favor me!",
    type: formType,
  };

  const defaultErr = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const { alertObjState, dispatchAction } = useContext(AlertContext);

  const [formData, setFormData] = useState(defaultInputs);
  const [err, setErr] = useState(defaultErr);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      let nonEmptyFields = Object.keys(formData).filter((field) => {
        const value = formData[field];
        return typeof value === "string" ? value.trim() !== "" : value !== null;
      });

      let currentErrors = Object.keys(err).filter(
        (field) => err[field].trim() !== ""
      );

      let result = nonEmptyFields.length > 1 && currentErrors.length === 0;

      setIsValid(result);
    };

    validateForm();
  }, [formData, err]);

  function truncateMiddle(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    const middle = Math.floor(maxLength / 2);
    const start = text.slice(0, middle);
    const end = text.slice(-middle); // -3 to account for the ellipsis

    return `${start}...${end}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.type === 'application') {
      const storageRef = ref(storage, `resume/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);
  
      const uploadPromise = new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
  
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            switch (error.code) {
              case "storage/unauthorized":
                reject(new Error("User doesn't have permission to access the object"));
                break;
              case "storage/canceled":
                reject(new Error("User canceled the upload"));
                break;
              case "storage/unknown":
                reject(new Error("Unknown error occurred, inspect error.serverResponse"));
                break;
            }
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setFileUrl(downloadURL);
              resolve(downloadURL);
            } catch (error) {
              reject(error);
            }
          }
        );
      });
    }

    try {
      // const downloadURL = await uploadPromise;

      // Collect email data
      const emailData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        tel: formData.tel.trim(),
        channel: formData.channel,
        request: formData.request.trim(),
        fileName,
        fileUrl,
        type: formData.type,
        jobName: formData.jobName,
      };

      const {firstName, lastName, email, tel, channel, request, type, jobName} = emailData;

      const renderClientRequestHTML = () => `
  <div style="display: flex; flex-direction: column; border-bottom: 5px solid #B0B0B0;">
    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Name</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${firstName} ${lastName}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Email</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${email}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Phone no.</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${tel}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>YT channel</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${channel}</span>
      </div>
    </div>

    <div style="display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Service request</span>
      </div>
      <div style="width: 100%; text-align: left; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${request}</span>
      </div>
    </div>
  </div>
`;

      const renderJobRequestHTML = () => `
  <div style="display: flex; flex-direction: column; border-bottom: 5px solid #B0B0B0;">
    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Name</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${firstName} ${lastName}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Email</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${email}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Phone no.</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${tel}</span>
      </div>
    </div>

    <div style="border-bottom: 1px solid #D3D3D3; display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Job Applied for</span>
      </div>
      <div style="width: 100%; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${jobName}</span>
      </div>
    </div>

    <div style="display: flex; justify-content: center;">
      <div style="width: 100%; text-align: center; font-size: 12px; color: #7D7D7D;">
        <span>Cover Letter</span>
      </div>
      <div style="width: 100%; text-align: left; font-size: 14px; font-weight: bold; color: #4F4F4F;">
        <span>${coverLetter}</span>
      </div>
    </div>

    <div style="display: flex; justify-content: center; padding: 16px; background-color: #E0E0E0; text-align: center; font-size: 14px; font-weight: bold; color: #4F4F4F;">
      <a href="${fileUrl}" style="padding: 12px 20px; background-color: #8A8A8A; color: #FFFFFF; text-decoration: none; border-radius: 4px;">Preview Resume</a>
    </div>
  </div>
`;

      const htmlContent = `
    <html>
      <head>
        <style>
          /* Tailwind CSS or custom styles */
          .bg-brand { background-color: #7d1a1a; }
          .bg-brand-light { background-color: #b02525; }
          .text-brand-light { color: #b02525; }
          .text-neutral-500 { color: #6b7280; }
          .text-neutral-700 { color: #374151; }
          .text-neutral-800 { color: #1f2937; }
          .text-neutral-100 { color: #f3f4f6; }
          .text-sm { font-size: 0.875rem; }
          .font-bold { font-weight: 700; }
          .font-light { font-weight: 300; }
          .rounded { border-radius: 0.375rem; }
          .w-full { width: 100%; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .pt-0 { padding-top: 0; }
          .pb-2 { padding-bottom: 0.5rem; }
          .border { border-width: 1px; }
          .border-solid { border-style: solid; }
          .shadow-lg { box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); }
          .text-center { text-align: center; }
          .bg-blue-400 { background-color: #60a5fa; }
          .bg-green-400 { background-color: #34d399; }
          .bg-neutral-100 { background-color: #f3f4f6; }
          .bg-neutral-50 { background-color: #fafafa; }
        </style>
      </head>
      <body class="px-3 bg-neutral-100 rounded border-solid border-y-4 border-brand-light">
        <div class="container">
          <div class="flex gap-2 justify-center items-center">
            <div class="w-fit">
              <img src="https://firebasestorage.googleapis.com/v0/b/vowatex-8f3af.appspot.com/o/email%2Flogo.png?alt=media&token=0658cc2f-f112-4cac-a3fb-d93d3740a7a1" alt="logo" width="40" height="50" class="object-cover" />
            </div>
            <div class="w-fit">
              <p class="pt-2 font-bold text-base text-brand-light">Vowatex.</p>
            </div>
          </div>
          <h1 class="pl-5 py-4 rounded text-left text-xl font-bold text-neutral-800 border-l-8 border-solid border-neutral-700 ${type === 'application' ? 'bg-blue-400' : 'bg-green-400'}">
            New ${type === 'application' ? 'Job Application' : 'Client Request'}
          </h1>
        </div>

        <div class="px-4 pt-0 pb-2 bg-neutral-50 border-neutral-200 border-solid shadow-lg rounded-lg">
          ${type === 'application' ? renderJobRequestHTML() : renderClientRequestHTML()}
        </div>

        <div class="text-xs text-center text-neutral-500">
          Copyright 2024 © Vowatex Content.
        </div>
      </body>
    </html>
  `;

  // const credentials = {
  //   host: process.env.NEXT_PUBLIC_SMTP_HOST,
  //   port: 465,
  //   secure: true,
  //   auth: {user: 'vowatexcontentsol@gmail.com',
  //     pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  //   }
  // }

  // const emailContent = {
  //   from: process.env.NEXT_PUBLIC_SMTP_USER,
  //   to: process.env.NEXT_PUBLIC_SMTP_TO_EMAIL,
  //   subject: `New ${type === "application" ? "Job Application" : "Client Request"} from ${emailData.firstName} ${emailData.lastName}`,
  //   html: htmlContent,
  // }

  // smtp.connect(credentials)
  // .then(() => smtp.sendEmail(emailContent))
  // .then(info => console.log('Email sent!'))
  // .catch(err > console.error(err));

      // Send email
      window.Email?.send({
        SecureToken: process.env.NEXT_PUBLIC_SMTP_TOKEN,
        To: process.env.NEXT_PUBLIC_SMTP_TO_EMAIL,
        From: process.env.NEXT_PUBLIC_SMTP_USER,
        Subject: `New ${type === "application" ? "Job Application" : "Client Request"} from ${emailData.firstName} ${emailData.lastName}`,
        Body: emailData.request,
      }).then((message) => {
        if (message === "OK") {
          alert("Email sent successfully!");
        } else {
          alert(`Failed to send email: ${message}`);
        }
        setFormData(defaultInputs);
        setLoading(false);
      }).catch(error => {
        console.error("Error sending email:", error);
        setLoading(false);
      });

    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };





  const handleInputValidation = (inputName, inputValue) => {
    if (inputName === "firstName" || inputName === "lastName") {
      const nameRegex = /^[a-zA-Z\s]+$/; // Updated regex to allow spaces
      const testName = nameRegex.test(inputValue);

      setErr((prev) => ({
        ...prev,
        [inputName]:
          inputValue.length === 0
            ? "Input is empty"
            : testName
              ? ""
              : "No number or special character is allowed",
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
              : "Invalid email address",
      }));
    } else {
      return;
    }

    let nonEmptyFields = Object.keys(formData).filter((field) => {
      const value = formData[field];
      return typeof value === "string" ? value.trim() !== "" : value !== null;
    });

    let currentErrors = Object.keys(err).filter(
      (field) => err[field].trim() !== ""
    );

    let result = nonEmptyFields.length !== 0 && currentErrors.length === 0;

    setIsValid(result);
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
      case "coverLetter":
        handleInputValidation(e.target.name, e.target.value);
        handleInputChange(e.target.name, e.target.value);
        break;
      case "resume":
        const file = e.target.files[0];
        setSelectedFile(file);
        handleInputChange(e.target.name, file);

        if (file) {
          setFileName(file.name);
          const reader = new FileReader();

          reader.onloadend = () => {
            setPreviewUrl(reader.result);
          };

          if (file.type.startsWith("image/")) {
            reader.readAsDataURL(file);
          } else if (file.type === "application/pdf") {
            reader.readAsDataURL(file);
          } else if (file.type.startsWith("text/")) {
            reader.readAsText(file);
          }
        } else {
          setPreviewUrl(null);
          setFileName("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles["form-box"]}>
        <motion.div
          variants={Variants}
          initial="scaleFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={`${err.firstName ? styles["inputError"] : ""} ${formData.firstName !== "" ? styles["not-empty"] : ""
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
            duration: 0.1,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={`${err.lastName ? styles["inputError"] : ""} ${formData.lastName !== "" ? styles["not-empty"] : ""
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
            duration: 0.1,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={`${styles["input"]} input`}
        >
          <input
            type="email"
            name="email"
            id="email"
            className={`${err.email ? styles["inputError"] : ""} ${formData.email !== "" ? styles["not-empty"] : ""
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
            duration: 0.1,
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
        {formType === "client" && (
          <>
            <motion.div
              variants={Variants}
              initial="scaleFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              className={`${styles["input"]} input`}
            >
              <input
                type="text"
                name="channel"
                id="channel"
                className={`${formData.channel !== "" ? styles["not-empty"] : ""
                  }`}
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
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              className={`${styles["input"]} ${styles.textarea} input`}
            >
              <textarea
                name="request"
                id="request"
                className={`${formData.request !== "" ? styles["not-empty"] : ""
                  }`}
                value={formData.request}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="request">Describe your content needs</label>
            </motion.div>
          </>
        )}

        {formType === "application" && (
          <>
            <motion.div
              variants={Variants}
              initial="scaleFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              className={`${styles["input"]} ${styles.textarea} input`}
            >
              <textarea
                name="coverLetter"
                id="coverLetter"
                className={`${formData.coverLetter !== "" ? styles["not-empty"] : ""
                  }`}
                value={formData.coverLetter}
                onChange={handleChange}
              ></textarea>
              <label htmlFor="coverLetter">Your Cover Letter</label>
            </motion.div>

            <motion.div
              variants={Variants}
              initial="scaleFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              className={`${styles["input"]} ${previewUrl !== null ? styles["active-box"] : styles["file-box"]
                } input`}
            >
              <label
                className={styles["file-label"]}
                htmlFor="resume"
                style={{}}
              >
                {previewUrl ? (
                  <div className={styles["actions"]}>
                    <button
                      onClick={() => {
                        setPreviewUrl(null);
                      }}
                    >
                      Remove this
                    </button>
                    <span>Select another file</span>
                  </div>
                ) : (
                  <span>Upload Resume</span>
                )}
                {previewUrl === null && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="32px"
                    viewBox="0 -960 960 960"
                    width="32px"
                    fill="var(--text-2)"
                  >
                    <path d="M440-367v127q0 17 11.5 28.5T480-200q17 0 28.5-11.5T520-240v-127l36 36q6 6 13.5 9t15 2.5q7.5-.5 14.5-3.5t13-9q11-12 11.5-28T612-388L508-492q-6-6-13-8.5t-15-2.5q-8 0-15 2.5t-13 8.5L348-388q-12 12-11.5 28t12.5 28q12 11 28 11.5t28-11.5l35-35ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v447q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-440H560q-17 0-28.5-11.5T520-640ZM240-800v200-200 640-640Z" />
                  </svg>
                )}
              </label>
              {previewUrl !== null && (
                <div className={styles["preview"]}>
                  {selectedFile?.type.startsWith("image/") ? (
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={100}
                      height={100}
                    />
                  ) : selectedFile?.type === "application/pdf" ? (
                    <object
                      data={previewUrl}
                      type={selectedFile.type}
                      width="100%"
                      height="auto"
                    >
                      <embed src={previewUrl} type={selectedFile.type} />
                      <p>
                        This browser does not support the embedded document.
                        Please download the file to view it.
                      </p>
                    </object>
                  ) : selectedFile?.type.startsWith("text/") ? (
                    <textarea
                      value={previewUrl}
                      readOnly
                      style={{ width: "100%", height: "auto" }}
                    />
                  ) : (
                    <p>Cannot preview this file type.</p>
                  )}
                  {fileName && (
                    <p className={styles["file-name"]}>
                      {truncateMiddle(fileName, 10)}
                    </p>
                  )}
                </div>
              )}
              <input
                style={{ display: "none" }}
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
              />
            </motion.div>

            <input
              type="text"
              name="fileName"
              id="fileName"
              style={{ display: "none" }}
              value={fileName}
              readOnly
            />
            <input
              type="text"
              name="fileUrl"
              id="fileUrl"
              style={{ display: "none" }}
              value={fileUrl}
              readOnly
            />
            <input
              type="text"
              name="jobName"
              id="jobName"
              style={{ display: "none" }}
              value={jobName}
              readOnly
            />
          </>
        )}
        <input
          type="text"
          name="formType"
          id="formType"
          style={{ display: "none" }}
          value={formType}
          readOnly
        />
        <button
          type="submit"
          className={`${styles["submit"]} ${!isValid ? styles.loading : loading ? styles.loading : ""
            }`}
          disabled={loading || !isValid}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {/* {loading && <Loader />} */}
    </>
  );
};

export default Form;
