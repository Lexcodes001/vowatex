"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Overview from "@/components/overview/page";
import Reviews from "@/components/reviews/page";
import Form from "./form";
import styles from "./page.module.css";
import Link from "next/link";
import Access from "@/images/access.webp";
import Dynamic from "@/images/dynamic.webp";
import Scalable from "@/images/scalable.webp";
import Header from "@/components/header/header";
import { Variants } from "@/lib/variants";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Overview
        header={"CONTACT US"}
        tagline={"Closer than before: Connect with Us to Unleash Your YouTube Potential"}
      />

      <section className={`${styles["contact-sect"]} ${styles["form-sect"]}`}>
        <Header>Let&apos;s Discuss Your Channel&apos;s Content Goals</Header>
        <Form formType={"client"} />
      </section>

      <section className={`${styles["contact-sect"]} ${styles["about"]}`}>
        <Header>
          Crafting Captivating Stories, Automating Success on YouTube
        </Header>
        <article>
          <motion.span
            variants={Variants}
            initial="scaleFade"
            whileInView="center"
            transition={{
              duration: 0.1,
              easings: "easeOut",
              staggerChildren: 0.5,
            }}
          >
            <Image src={Dynamic} alt="dynamic" />
            <p>
              Dynamic YouTube scripts designed to captivate your audience and
              keep viewers engaged to your channel.
            </p>
          </motion.span>
          <motion.span
            variants={Variants}
            initial="scaleFade"
            whileInView="center"
            transition={{
              duration: 0.1,
              easings: "easeOut",
              staggerChildren: 0.5,
            }}
          >
            <Image src={Scalable} alt="scalable" />
            <p>
              Our scalable platform streamlines the content creation process,
              allowing you to order compelling scripts with just a few clicks.
            </p>
          </motion.span>
          <motion.span
            variants={Variants}
            initial="scaleFade"
            whileInView="center"
            transition={{
              duration: 0.1,
              easings: "easeOut",
              staggerChildren: 0.5,
            }}
          >
            <Image src={Access} alt="access" />
            <p>
              Gain access to our industry-leading team ensuring cutting-edge
              automation solutions optimize workflows for efficiency.
            </p>
          </motion.span>
        </article>
      </section>

      <section className={`${styles["contact-sect"]} ${styles["learn-more"]}`}>
        <motion.h3
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{
            duration: 0.1,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
        >
          For a more personalized experience...
        </motion.h3>
        <div className={styles["cards"]}>
          <Link href={"./yt-script-writing"} className={styles["card"]}>
            <motion.h2
              variants={Variants}
              initial="topFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
              }}
            >
              Get to know our script-writing services
            </motion.h2>
            <div>
              <motion.p
                variants={Variants}
                initial="topFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                }}
              >
                Learn more
              </motion.p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--brand)"
                viewBox="0 0 48 48"
                width="15px"
                height="15px"
              >
                <path
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
                />
                <path
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"
                />
                <line
                  x1="23.5"
                  x2="41.5"
                  y1="24.5"
                  y2="6.5"
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <polyline
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  points="27.5,6.5 41.5,6.5 41.5,20.5"
                />
              </svg>
            </div>
          </Link>
          <Link href={"./yt-automation"} className={styles["card"]}>
            <motion.h2
              variants={Variants}
              initial="topFade"
              whileInView="center"
              transition={{
                duration: 0.1,
                easings: "easeOut",
              }}
            >
              Get to know our automation services
            </motion.h2>
            <div>
              <motion.p
                variants={Variants}
                initial="bottomFade"
                whileInView="center"
                transition={{
                  duration: 0.1,
                  easings: "easeOut",
                }}
              >
                Learn more
              </motion.p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--brand)"
                viewBox="0 0 48 48"
                width="15px"
                height="15px"
              >
                <path
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
                />
                <path
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"
                />
                <line
                  x1="23.5"
                  x2="41.5"
                  y1="24.5"
                  y2="6.5"
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <polyline
                  fill="none"
                  stroke="var(--brand)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  points="27.5,6.5 41.5,6.5 41.5,20.5"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      <Reviews parallax={false} />
    </main>
  );
}
