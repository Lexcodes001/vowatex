"use client";
import { useState } from "react";
import styles from "./page.module.css";
import nStyles from "../navigation/sideNav/page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "@/lib/variants";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [];
  return (
    <>
      <span className={`${styles.noticeBox} ${nStyles.box}`}>
        <svg
          onClick={() => {
            setIsOpen(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="var(--text-2)"
        >
          <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
        </svg>
        {isOpen && (
          <div className={styles.modal}>
            <header>Notifications</header>
            <ul>
              {notifications?.map((item, id) => (
                <li key={id}>{item.details}</li>
              ))}
            </ul>
            {!notifications.length && <p>You have no notification!</p>}
          </div>
        )}
      </span>
      {isOpen && (
        <>
          <motion.div
            variants={Variants}
            initial="fade"
            whileInView="center"
            transition={{
              duration: 0.5,
              easings: "easeOut",
              staggerChildren: 0.5,
            }}
            onClick={() => {
              setIsOpen(false);
            }}
            className={styles.overlay}
          ></motion.div>
        </>
      )}
    </>
  );
};

export default Notification;
