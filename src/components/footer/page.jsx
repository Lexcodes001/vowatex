"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  About,
  Links,
  OtherLinks,
  Socials,
} from "@/components/footer/constants";
import styles from "./page.module.css";
import Logo from "@/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Variants } from "@/lib/variants";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles["footer"]}>
      {/* <svg
        className={styles["wavy"]}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fillOpacity="1"
          d="M0,64L120,80C240,96,480,128,720,144C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      <main>
        <div className={styles["top"]}>
          <div className={styles["about"]}>
            <motion.div
              variants={Variants}
              initial="rightFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
              className={styles["box"]}
            >
              <Image src={Logo} alt="Vowatex" />
              <header>Vowatex.</header>
            </motion.div>
            <motion.p
              variants={Variants}
              initial="leftFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
                staggerChildren: 0.5,
              }}
            >
              Vowatex specializes in crafting captivating YouTube scripts and
              automation strategies tailored to your brand&apos;s storytelling
              prowess and audience engagement goals. Partner with us to command
              success on your YouTube journey.
            </motion.p>
          </div>
          <div className={styles["links"]}>
            <section>
              <motion.header
                variants={Variants}
                initial="rightFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                VOWATEX
              </motion.header>
              <motion.div
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                {Links.map((item) => (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    <motion.p>{item.name}</motion.p>
                  </Link>
                ))}
              </motion.div>
            </section>
            <section>
              <motion.header
                variants={Variants}
                initial="rightFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                ABOUT
              </motion.header>
              <motion.div
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                {About.map((item) => (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    <motion.p
                     
                    >
                      {item.name}
                    </motion.p>
                  </Link>
                ))}
              </motion.div>
            </section>
            <section className={styles["socials"]}>
              <motion.header
                variants={Variants}
                initial="rightFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                SOCIALS
              </motion.header>
              <motion.div
                variants={Variants}
                initial="leftFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
              >
                {Socials.map((item) => (
                  <Link
                    href={item.url}
                    key={item.url}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    {item.icon}
                    <motion.p
                      
                    >
                      {item.name}
                    </motion.p>
                  </Link>
                ))}
              </motion.div>
            </section>
          </div>
        </div>
        <motion.div
          variants={Variants}
          initial="topFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            type: "tween",
          }}
          className={styles["bottom"]}
        >
          <div className={styles["other-links"]}>
            {OtherLinks.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className={`${pathname === item.url ? styles.active : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className={styles["attribution"]}>
            <p>Copyright 2024 © Vowatex Content.</p>
          </div>
        </motion.div>
      </main>
    </footer>
  );
}
