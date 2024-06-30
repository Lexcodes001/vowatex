"use client";
import Overview from "@/components/overview/page";
import ContactPip from "../contact/cip";
import styles from "./page.module.css";
import { faqCategories } from "./constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header/header";
import { Variants } from "@/lib/variants";

export default function Faq() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeId, setActiveId] = useState(0);

  const handleTabToggle = (id) => {
    setCurrentIndex(id);
    setActiveId(null);
  };

  const handleFaqToggle = (id) => {
    setActiveId((prev) => {
      return prev === id ? null : id;
    });
  };

  return (
    <main className={styles.main}>
      <Overview
        header={"FAQs'"}
        tagline={
          "Your Questions Answered: Frequently Asked Questions about Our Services"
        }
      />
      <section className={`${styles["faq-sect"]} ${styles["header"]}`}>
        <Header>Frequently asked questions</Header>
        <motion.p
          variants={Variants}
          initial="rightFade"
          whileInView="center"
          transition={{ duration: .1, easings: "easeOut" }}
        >
          We collaborate with remarkable individuals who excel in the art of
          crafting captivating content
        </motion.p>
      </section>

      <section className={`${styles["faq-sect"]} ${styles["faq-container"]}`}>
        <motion.div
          variants={Variants}
          initial="leftFade"
          whileInView="center"
          transition={{ duration: .1, easings: "easeOut" }}
          className={styles["nav-tab"]}
        >
          {faqCategories.map((category, index) => (
            <motion.button
              variants={Variants}
              initial="rightFade"
              whileInView="center"
              transition={{ duration: .1, easings: "easeOut" }}
              key={category.category}
              onClick={() => {
                handleTabToggle(index);
              }}
              className={`${styles["categories"]} ${
                index === currentIndex && styles["active-tab"]
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </motion.div>

        <div className={styles["faqs"]}>
          {faqCategories[currentIndex].faqs.map((faq) => (
            <motion.div
              variants={Variants}
              initial="topFade"
              whileInView="center"
              transition={{ duration: .1, easings: "easeOut" }}
              key={faq.question}
              className={`${styles["box"]} ${
                activeId === faq.id && styles.active
              }`}
            >
              <button
                onClick={() => {
                  handleFaqToggle(faq.id);
                }}
                className={styles["question"]}
              >
                <h2>{faq.question}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 100 100"
                >
                  <switch>
                    <g>
                      <path d="M97.5,50C97.5,23.8,76.2,2.5,50,2.5S2.5,23.8,2.5,50c0,26.2,21.3,47.5,47.5,47.5S97.5,76.2,97.5,50z M50.2,68.7L36.1,54.5    c-1.2-1.2-1.9-2.9-1.9-4.5c0-1.6,0.6-3.3,1.9-4.5l14.2-14.2c2.5-2.5,6.5-2.5,9,0c2.5,2.5,2.5,6.5,0,9L49.6,50l9.7,9.7    c2.5,2.5,2.5,6.5,0,9C56.8,71.2,52.7,71.2,50.2,68.7z" />
                    </g>
                  </switch>
                </svg>
              </button>
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={activeId === faq.id && { scaleY: 1 }}
                    exit={{ scaleY: 0 }}
                    className={`${styles["solution"]}`}
                  >
                    <motion.p>{faq.solution}</motion.p>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactPip />
    </main>
  );
}
