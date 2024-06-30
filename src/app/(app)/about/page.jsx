"use client";
import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";
import Values from "./values";
import { motion } from "framer-motion";
import Header from "@/components/header/header";
import { Variants } from "@/lib/variants";
import AnimatedText from "@/components/framer/text-animation";

const storyParagraphs = [
  "Like many great ideas, Vowatex was born out of a personal struggle. Back in 2013, our founder, Emily, was trying to grow her small business&apos;s online presence through YouTube videos. She quickly realized that creating engaging scripts and automating the video.",
  "Determined to find a solution, Emily began honing her scriptwriting skills and experimenting with automation tools.",
  "What started as a passion project soon turned into a full-fledged obsession, as she discovered the incredible power of well-crafted YouTube content and streamlined workflows.",
  "Joined by a small team of like-minded creatives, Emily's little side hustle blossomed into Vowatex – a company dedicated to helping businesses and individuals alike unlock the full potential of YouTube through expertly written scripts and cutting-edge automation.",
  "From our humble beginnings in a cozy WeWork office, we've grown into a tight-knit team of storytellers, tech enthusiasts, and problem-solvers, united by a common goal: to make YouTube content creation accessible, efficient, and truly impactful.",
  "Today, Vowatex is more than just a service provider; we're a community of passionate individuals who believe in the transformative power of great stories and innovative automation solutions. Whether you're a solopreneur, a small business owner, or a multinational corporation, we're here to help you captivate your audience and streamline your YouTube journey.",
  "At Vowatex, we don't just write scripts – we craft narratives that resonate, inspire, and leave a lasting impression. Join us on this exciting adventure, and let's redefine what&apos;s possible on YouTube, one captivating story at a time.",
];

export default function About() {
  return (
    <main className={styles.main}>
      <Overview
        header={"ABOUT US"}
        tagline={"Discover the Vowatex Story: Empowering Brands on YouTube"}
      />
      <section className={`${styles["about-sect"]} ${styles["mission"]}`}>
        <motion.h2
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{ duration: .1, easings: "easeOut" }}
        >
          Vowatex places YouTube script writing and automation at the core of
          your brand&apos;s growth strategy
        </motion.h2>
        <motion.p
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{ duration: .1, easings: "easeOut" }}
        >
          Our unwavering mission is to bridge the gap between businesses and
          their target audiences through compelling YouTube scripts meticulously
          crafted by our specialized writers, overseen by a team that
          prioritizes human connection and personalized experiences.
        </motion.p>
      </section>
      <section className={`${styles["about-sect"]} ${styles["values"]}`}>
        <Header>Our Values</Header>
        <motion.p
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{ duration: .1, easings: "easeOut" }}
          className={styles["intro"]}
        >
          At Vowatex, these seven values guide our actions, ensuring that every
          project we undertake is a testament to our commitment to excellence in
          YouTube script writing and automation.
        </motion.p>
        <Values />
      </section>
      <section className={`${styles["about-sect"]} ${styles["story"]}`}>
        <svg
          className={`${styles["story-wave"]} ${styles.one}`}
          style={{ transform: "rotate(180deg)", transition: 0.3 }}
          viewBox="0 0 1440 270"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--surface-1)"
        >
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            d="M0,108L60,130.5C120,153,240,198,360,202.5C480,207,600,171,720,130.5C840,90,960,45,1080,45C1200,45,1320,90,1440,94.5C1560,99,1680,63,1800,63C1920,63,2040,99,2160,103.5C2280,108,2400,81,2520,90C2640,99,2760,144,2880,166.5C3000,189,3120,189,3240,193.5C3360,198,3480,207,3600,180C3720,153,3840,90,3960,76.5C4080,63,4200,99,4320,126C4440,153,4560,171,4680,162C4800,153,4920,117,5040,94.5C5160,72,5280,63,5400,67.5C5520,72,5640,90,5760,108C5880,126,6000,144,6120,157.5C6240,171,6360,180,6480,171C6600,162,6720,135,6840,139.5C6960,144,7080,180,7200,193.5C7320,207,7440,198,7560,184.5C7680,171,7800,153,7920,121.5C8040,90,8160,45,8280,36C8400,27,8520,54,8580,67.5L8640,81L8640,270L8580,270C8520,270,8400,270,8280,270C8160,270,8040,270,7920,270C7800,270,7680,270,7560,270C7440,270,7320,270,7200,270C7080,270,6960,270,6840,270C6720,270,6600,270,6480,270C6360,270,6240,270,6120,270C6000,270,5880,270,5760,270C5640,270,5520,270,5400,270C5280,270,5160,270,5040,270C4920,270,4800,270,4680,270C4560,270,4440,270,4320,270C4200,270,4080,270,3960,270C3840,270,3720,270,3600,270C3480,270,3360,270,3240,270C3120,270,3000,270,2880,270C2760,270,2640,270,2520,270C2400,270,2280,270,2160,270C2040,270,1920,270,1800,270C1680,270,1560,270,1440,270C1320,270,1200,270,1080,270C960,270,840,270,720,270C600,270,480,270,360,270C240,270,120,270,60,270L0,270Z"
          ></path>
        </svg>
        <div className={styles["box"]}>
          <Header>Our Story</Header>
          {storyParagraphs.map((text, index) => (
            <motion.p
              variants={Variants}
              initial={`${index % 2 === 0 ? "leftFade" : "rightFade"}`}
              whileInView="center"
              transition={{
                duration: .1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              key={text}
            >
              {text}
              <br />
            </motion.p>
          ))}
          <br />
        </div>
        <svg
          className={`${styles["story-wave"]} ${styles.two}`}
          style={{ transform: "rotate(0deg)", transition: 0.3 }}
          viewBox="0 0 1440 270"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="var(--surface-1)"
        >
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            d="M0,108L60,130.5C120,153,240,198,360,202.5C480,207,600,171,720,130.5C840,90,960,45,1080,45C1200,45,1320,90,1440,94.5C1560,99,1680,63,1800,63C1920,63,2040,99,2160,103.5C2280,108,2400,81,2520,90C2640,99,2760,144,2880,166.5C3000,189,3120,189,3240,193.5C3360,198,3480,207,3600,180C3720,153,3840,90,3960,76.5C4080,63,4200,99,4320,126C4440,153,4560,171,4680,162C4800,153,4920,117,5040,94.5C5160,72,5280,63,5400,67.5C5520,72,5640,90,5760,108C5880,126,6000,144,6120,157.5C6240,171,6360,180,6480,171C6600,162,6720,135,6840,139.5C6960,144,7080,180,7200,193.5C7320,207,7440,198,7560,184.5C7680,171,7800,153,7920,121.5C8040,90,8160,45,8280,36C8400,27,8520,54,8580,67.5L8640,81L8640,270L8580,270C8520,270,8400,270,8280,270C8160,270,8040,270,7920,270C7800,270,7680,270,7560,270C7440,270,7320,270,7200,270C7080,270,6960,270,6840,270C6720,270,6600,270,6480,270C6360,270,6240,270,6120,270C6000,270,5880,270,5760,270C5640,270,5520,270,5400,270C5280,270,5160,270,5040,270C4920,270,4800,270,4680,270C4560,270,4440,270,4320,270C4200,270,4080,270,3960,270C3840,270,3720,270,3600,270C3480,270,3360,270,3240,270C3120,270,3000,270,2880,270C2760,270,2640,270,2520,270C2400,270,2280,270,2160,270C2040,270,1920,270,1800,270C1680,270,1560,270,1440,270C1320,270,1200,270,1080,270C960,270,840,270,720,270C600,270,480,270,360,270C240,270,120,270,60,270L0,270Z"
          ></path>
        </svg>
      </section>
      <ContactPip />
    </main>
  );
}
