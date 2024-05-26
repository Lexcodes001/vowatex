import Overview from "@/components/overview/page";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Overview
        header={"CONTACT US"}
        tagline={
          "We collaborate with remarkable individuals who excel in the art of crafting captivating content"
        }
      />

      <section className={`${styles['contact-sect']} ${styles["mission"]}`}></section>
    </main>
  );
}
