import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";

export default function Careers() {
  return (
    <main className={styles.main}>
      <Overview
        header={"CAREERS"}
        tagline={
          "We collaborate with remarkable individuals who excel in the art of crafting captivating content"
        }
      />

      <section
        className={`${styles["career-sect"]} ${styles["mission"]}`}
      ></section>
      <ContactPip />
    </main>
  );
}
