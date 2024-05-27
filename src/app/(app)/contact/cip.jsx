'use client';
import Image from "next/image";
import Form from './form';
import styles from "./page.module.css";
import reviewImg from "@/images/dpF2.webp";

const ContactPip = () => {
  return (
    <section className={styles["cip-main"]}>
      <header>Get in touch</header>
      <div className={styles["intro"]}>
        <p>
          Let&apos;s discuss your YouTube content goals. Scale with a dedicated
          Vowatex manager.
        </p>
        <ol>
          <li>Custom scriptwriter vetting and management</li>
          <li>High volume and high quality YouTube scripts</li>
          <li>Consistent YouTube publishing schedules</li>
          <li>Premium YouTube channel support</li>
        </ol>
      </div>

      <div className={styles["form"]}>
        <Form />
      </div>

      <div className={styles["story"]}>
        <div className={styles["review"]}>
          <Image src={reviewImg} alt="reviewImage" />
          <p>
            &quot;The Vowatex team is cosmic and incredibly helpful. They not only
            help bring your YouTube vision to life, they truly endeavor to
            understand your channel&apos;s storytelling needs and how their
            scripting prowess can best meet those needs. They ensure the YouTube
            scripts created are not only engaging, but also purposeful.&quot;
          </p>
        </div>

        <div className={styles["details"]}>
          <p className={styles["name"]}>Zara Celestial</p>
          <p className={styles["role"]}>Galactic YouTube Creator</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPip;
