"use client";
import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <Overview
        header={"OUR BLOG"}
        tagline={
          "Insights and Inspiration for Conquering YouTube with Engaging Content and Seamless Automation"
        }
      />

      <section
        className={`${styles["blog-sect"]} ${styles["mission"]}`}
      ></section>
      <ContactPip />
    </main>
  );
}
