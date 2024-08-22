"use client";
import { motion } from "framer-motion";
import Overview from "@/components/overview/page";
import Header from "@/components/header/header";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "@/components/flip-card/page";
import { Vacancies } from "./constants";
import Salary from "@/images/big_salary.webp";
import Increase from "@/images/salary_increase.webp";
import Vacation from "@/images/vacation.webp";
import Health from "@/images/health.webp";
import Image from "next/image";
import Hiring from "@/images/hiring.svg";
import Writing from "@/images/writing.webp";
import Editor from "@/images/video_editor.webp";
import { Variants } from "@/lib/variants";

const valuesObj = [
  {
    name: "Competitive Salary",
    icon: Salary,
    desc: "At Vowatex, we offer a competitive salary package that is in line with industry standards and commensurate with your experience and skills.",
  },
  {
    name: "Office Vacation",
    icon: Vacation,
    desc: "Vowatex’s strategic blogger outreach, connecting you with influential voices to expand your online presence and engagement.",
  },
  {
    name: "Health Insurance",
    icon: Health,
    desc: "We conduct thorough improvement analyses, pinpointing opportunities for growth and optimization to enhance your business performance.",
  },
  {
    name: "Salary Increases",
    icon: Increase,
    desc: "Vowatex’s strategic blogger outreach, connecting you with influential voices to expand your online presence and engagement.",
  },
];

export default function Careers() {
  return (
    <main className={styles.main}>
      <Overview
        header={"WE ARE HIRING"}
        tagline={
          "Explore Career Opportunities: Join Our Team of Storytellers and Automation Innovators"
        }
      />

      <section className={`${styles["career-sect"]} ${styles["intro"]}`}>
        <Image src={Hiring} alt="Hiring" />
        <motion.article
          variants={Variants}
          initial="bottomFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            type: "tween",
          }}
        >
          <p>
            Are you a talented wordsmith with a passion for crafting engaging
            content?
          </p>

          <Link href={"./careers/#jobs"}>
            <button>SEE JOB VACANCIES</button>
          </Link>
        </motion.article>
      </section>

      <section className={`${styles["career-sect"]} ${styles["why"]}`}>
        <Header>Why join us?</Header>
        <motion.p
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            type: "tween",
          }}
        >
          Unlock your potential in a dynamic environment that champions growth
          and innovation. Join a team where your aspirations meet limitless
          opportunities.
        </motion.p>
        <div className={`${styles["reasons"]}`}>
          {valuesObj.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              header={value.name}
              desc={value.desc}
            />
          ))}
        </div>
      </section>

      <section className={`${styles["career-sect"]} ${styles["roles"]}`} id="jobs">
        <Header>Job Vacancies</Header>
        <p
          className={styles["intro"]}
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            type: "tween",
          }}
        >
          Do you think you are capabale to fill any of the positions below?
        </p>
        <div className={styles.jobs}>
          {Vacancies.map((job) => (
            <Link
              href={`careers/${job.uid}`}
              className={`${job.status === "closed" && styles["not-active"]} ${
                styles.job
              }`}
              key={job.uid}
            >
              <Image width={100} height={100} src={job.name === "Content Writer" ? Writing : Editor} alt={job.uid} />
              <div className={`${styles["details"]}`}>
                <div className={`${styles["top"]}`}>
                  <motion.h3
                    variants={Variants}
                    initial="topFade"
                    whileInView="center"
                    transition={{
                      duration: 0.1,
                      easings: "easeOut",
                      type: "tween",
                    }}
                    className={`${job.status === "closed" && styles.blurred}`}
                  >
                    {job.name}
                  </motion.h3>
                  <motion.div
                    variants={Variants}
                    initial="rightFade"
                    whileInView="center"
                    transition={{
                      duration: 0.1,
                      easings: "easeOut",
                      type: "tween",
                    }}
                    className={styles["tags"]}
                  >
                    <motion.span
                      variants={Variants}
                      initial="bottomFade"
                      whileInView="center"
                      transition={{
                        duration: 0.1,
                        easings: "easeOut",
                        type: "tween",
                      }}
                      className={`${styles.status} ${
                        job.status === "closed" && styles.closed
                      }`}
                    >
                      {job.status.toLocaleUpperCase()}
                    </motion.span>
                    <motion.span
                      variants={Variants}
                      initial="bottomFade"
                      whileInView="center"
                      transition={{
                        duration: 0.1,
                        easings: "easeOut",
                        type: "tween",
                      }}
                      className={`${job.status === "closed" && styles.blurred}`}
                    >
                      {job.location}
                    </motion.span>
                    <motion.span
                      variants={Variants}
                      initial="bottomFade"
                      whileInView="center"
                      transition={{
                        duration: 0.1,
                        easings: "easeOut",
                        type: "tween",
                      }}
                      className={`${job.status === "closed" && styles.blurred}`}
                    >
                      {job.type}
                    </motion.span>
                  </motion.div>
                  <motion.p
                    variants={Variants}
                    initial="rightFade"
                    whileInView="center"
                    transition={{
                      duration: 0.1,
                      easings: "easeOut",
                      type: "tween",
                    }}
                    className={`${job.status === "closed" && styles.blurred}`}
                  >
                    {job.prologue}
                  </motion.p>
                </div>
                <motion.button
                  variants={Variants}
                  initial="scaleFade"
                  whileInView="center"
                  transition={{
                    duration: 0.1,
                    easings: "easeOut",
                    type: "tween",
                  }}
                  className={`${styles.jobPage} ${
                    job.status === "closed" && styles.blurred
                  }`}
                >
                  SEE DETAILS
                </motion.button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactPip />
    </main>
  );
}
