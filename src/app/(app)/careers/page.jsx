"use client";
import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";

export default function Careers() {
  return (
    <main className={styles.main}>
      <Overview
        header={"CAREERS"}
        tagline={"Coming soon!"}
      />

      <section
        className={`${styles["career-sect"]} ${styles["mission"]}`}
      ></section>
      <ContactPip />
    </main>
  );
}
