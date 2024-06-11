"use client";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header/header";
import Form from "@/app/(app)/contact/form";
import { Vacancies } from "../constants";
import { Variants } from "@/lib/variants";
import Overview from "@/components/overview/page";
import Writing from "@/images/writing.webp";

const CareerPage = ({ career }) => {
  const careerData = Vacancies.find((item) => item.uid === career);
  const pageRoutes = [
    { link: "careers", preview: "Careers /" },
    { link: careerData.uid, preview: careerData.preview },
  ];

  if (!careerData) {
    return <div>Career not found</div>;
  }

  return (
    <main className={styles.main}>
      <Overview
        header={careerData.name}
        tagline={careerData.prologue}
        img={Writing}
        routes={pageRoutes}
      />

      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>About Us</Header>
        <motion.p
          variants={Variants}
          initial="fade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
        >
          Our unwavering mission is to bridge the gap between businesses and
          their target audiences through compelling YouTube scripts meticulously
          crafted by our specialized writers, overseen by a team that
          prioritizes human connection and personalized experiences.
        </motion.p>
      </section>
      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>Job Description</Header>
        <motion.p
          variants={Variants}
          initial="fade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
        >
          {careerData.desc}
        </motion.p>
      </section>

      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>Responsibilities</Header>
        <motion.p
          variants={Variants}
          initial="fade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
        >
          The job description includes the following responsibilities:
        </motion.p>
        <ul>
          {careerData.duties.map((duty) => (
            <motion.li
              variants={Variants}
              initial="rightFade"
              whileInView="center"
              transition={{
                duration: 0.5,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              key={duty}
            >
              {duty}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>Qualifications:</Header>
        {/* <p>The job description includes the following responsibilities:</p> */}
        <ul>
          {careerData.qualifications.map((item) => (
            <motion.li
              variants={Variants}
              initial="rightFade"
              whileInView="center"
              transition={{
                duration: 0.5,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              key={item}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>Requirements:</Header>
        {/* <p>The job description includes the following responsibilities:</p> */}
        <ul>
          {careerData.requirements.map((item) => (
            <motion.li
              variants={Variants}
              initial="rightFade"
              whileInView="center"
              transition={{
                duration: 0.5,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              key={item}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className={`${styles["job-sect"]} ${styles[""]}`}>
        <Header>Application Procedure</Header>
        <motion.p
          variants={Variants}
          initial="fade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
        >
          {careerData.process}
        </motion.p>
        <Form />
      </section>
    </main>
  );
};

export default CareerPage;
