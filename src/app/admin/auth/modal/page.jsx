"use client";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AlertContext } from "@/contexts/alert-context";
import visibleSvg from "@/images/visible.svg";
import hiddenSvg from "@/images/hidden.svg";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/button/page";

const defInputs = ["", "", "", ""];
const defNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Modal = () => {
  const [input, setInput] = useState(Array(defInputs.length).fill(""));
  const router = useRouter();
  const [trials, setTrials] = useState(3);
  const [err, setErr] = useState("");
  const [visible, setVisible] = useState(false);
  const [shake, setShake] = useState(false);

  const { alertObjState, dispatchAction } = useContext(AlertContext);

  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const handleNumberClick = (value) => {
    setInput((prev) => {
      const newInput = [...prev];
      const currentIndex = newInput.findIndex((val) => val === "");
      if (currentIndex !== -1) {
        newInput[currentIndex] = value;
        if (currentIndex < defInputs.length - 1) {
          inputRefs.current[currentIndex + 1].focus();
        } else {
          validatePin(newInput.join("")); // Automatically validate once last input is filled
        }
      }
      return newInput;
    });
  };

  const handleDelete = () => {
    setInput((prev) => {
      const newInput = [...prev];
      const currentIndex = newInput.findLastIndex((val) => val !== "");
      if (currentIndex !== -1) {
        newInput[currentIndex] = "";
        inputRefs.current[currentIndex].focus();
      }
      return newInput;
    });
  };

  const validatePin = (enteredPin) => {
    if (enteredPin === "1234") {
      setTrials(3);
      router.push("/admin");
      dispatchAction("action_status", "dynamic", "success", "You're back in!");
      localStorage.setItem("lastActivity", Date.now());
    } else {
      setShake(true);
      navigator.vibrate(1000);
      setTimeout(() => setShake(false), 1000);

      if (trials >= 1) {
        dispatchAction(
          "action_status",
          "dynamic",
          "fail",
          `You have ${trials - 1} ${trials === 1 ? "trial" : "trials"} left`
        );
        setTrials((prev) => prev - 1);
        setErr("Wrong PIN");
        setInput(Array(defInputs.length).fill(""));
        inputRefs.current[0].focus();
      } else {
        setErr("YOU'RE OUT!");
        signOut(auth);
        dispatchAction(
          "action_status",
          "dynamic",
          "fail",
          `You have no trial left, bye!`
        );
        router.push("/admin/auth/login");
      }
    }
  };

  const onClose = () => {
    localStorage.setItem("lastActivity", null);
    signOut(auth);
    router.push("/admin/auth/login");
  };

  return (
    <div className={styles.modalOverlay}>
      <motion.div className={styles.modalContent}>
        <div className={styles.heading}>
          <h2>You&apos;re still there?</h2>
          <p>Enter your pin below to continue:</p>
        </div>
        <form className={styles["form"]} action="">
          <div className={styles["input-box"]}>
            {/* <span className={styles["status"]}>
              

              {err && (
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
              )}
            </span> */}
            {defInputs.map((_, index) => (
              <motion.input
                animate={{ x: shake ? [-5, 5, -5, 5, 0] : 0 }} // Shake animation
                transition={{ duration: 0.2 }} // Animation duration
                key={index}
                value={input[index]}
                maxLength={1}
                readOnly
                type={visible ? "text" : "password"}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`${input[index] !== "" ? styles["not-empty"] : ""} ${
                  err && styles["inputError"]
                }`}
                id={`pin${index}`}
                name={`pin${index}`}
                placeholder=""
              />
            ))}
          </div>
          <span className={styles["err"]}>{err && err}</span>

          <div className={styles["grid-container"]}>
            {defNumbers.map((no) => (
              <Button
                key={no}
                className={styles.entryBtn}
                onClick={() => handleNumberClick(no)}
              >
                {no}
              </Button>
            ))}
            <div className={styles["status"]}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setVisible((prev) => !prev);
                }}
              >
                <Image src={!visible ? visibleSvg : hiddenSvg} alt="" />
              </button>
            </div>
            <Button onClick={() => handleNumberClick(0)}>0</Button>
            <button className={styles["delete"]} onClick={handleDelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
              >
                <path
                  fill="var(--border-line)"
                  d="m95.832 25.035c0-3.3281-1.3203-6.5156-3.6758-8.8711-2.3516-2.3477-5.543-3.668-8.8672-3.668h-36.422c-2.918 0-5.7539 1.0195-8.0039 2.8828-6.3711 5.2734-20.168 16.703-30.172 24.992-2.8672 2.375-4.5273 5.9023-4.5273 9.625 0 3.7188 1.6602 7.25 4.5273 9.625 10.004 8.2852 23.801 19.715 30.172 24.988 2.25 1.8633 5.0859 2.8867 8.0039 2.8867h36.422c3.3242 0 6.5156-1.3242 8.8672-3.6719 2.3555-2.3555 3.6758-5.543 3.6758-8.8711v-49.918zm-8.332 0v49.918c0 1.1172-0.44531 2.1875-1.2344 2.9727-0.78906 0.79297-1.8594 1.2344-2.9766 1.2344h-36.422c-0.98047 0-1.9297-0.33984-2.6875-0.96484l-30.172-24.992c-0.95703-0.79297-1.5078-1.9688-1.5078-3.207 0-1.2422 0.55078-2.418 1.5078-3.2109l30.172-24.992c0.75781-0.625 1.707-0.96484 2.6875-0.96484h36.422c1.1172 0 2.1875 0.44141 2.9766 1.2344 0.78906 0.78516 1.2344 1.8555 1.2344 2.9727zm-29.168 19.066-9.5547-9.5547-5.8906 5.8945 9.5547 9.5547-9.5547 9.5508 5.8906 5.8945 9.5547-9.5547 9.5547 9.5547 5.8906-5.8945-9.5547-9.5508 9.5547-9.5547-5.8906-5.8945z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className={styles.actions}>
            <Button className={styles["cancel"]} onClick={onClose}>
              Leave
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

Modal.displayName = "Modal";

export default Modal;
