import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Variants } from "@/lib/variants";

const Overview = ({ header, tagline }) => {
  const randomIndex = Math.floor(Math.random() * 4) + 1;

  return (
    <section className={styles["overview"]}>
      <Image
        src={`/assets/images/gradient-${randomIndex}.webp`}
        alt="Gradient Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <motion.header
        variants={Variants}
        initial="topFade"
        whileInView="center"
        transition={{ duration: 1, easings: "easeOut" }}
      >
        {header}
      </motion.header>
      <motion.p
        variants={Variants}
        initial="bottomFade"
        whileInView="center"
        transition={{ duration: 1, easings: "easeOut" }}
      >
        {tagline}
      </motion.p>
    </section>
  );
};

export default Overview;
