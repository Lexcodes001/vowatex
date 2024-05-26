import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <Overview
        header={"OUR BLOG"}
        tagline={
          "We collaborate with remarkable individuals who excel in the art of crafting captivating content"
        }
      />

      <section
        className={`${styles["blog-sect"]} ${styles["mission"]}`}
      ></section>
      <ContactPip />
    </main>
  );
}
