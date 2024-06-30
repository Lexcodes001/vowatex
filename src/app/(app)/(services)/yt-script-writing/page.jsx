"use client";
import styles from "./page.module.css";
import faqStyles from "../../faq/page.module.css";
import Form from "../../contact/form";
import Reviews from "@/components/reviews/page";
import Story from "@/images/icons-story.webp";
import Expertise from "@/images/icons-experience.webp";
import Content from "@/images/content-management.webp";
import Dynamic from "@/images/dynamic.webp";
import Overview from "@/components/overview/page";
import Link from "next/link";
import Card from "@/components/flip-card/page";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: Story,
    header: "Narrative-Driven Storytelling",
    desc: "We weave captivating narratives into our scripts, ensuring that your brand's message is conveyed through an engaging and immersive storytelling experience that keeps viewers hooked from start to finish.",
  },
  {
    icon: Expertise,
    header: "Industry-Specific Expertise",
    desc: "Our team of specialized scriptwriters possesses in-depth knowledge of various industries, allowing them to craft scripts that accurately reflect your brand's unique voice and resonate with your target audience.",
  },
  {
    icon: Content,
    header: "Audience-Centric Content Strategy",
    desc: "We conduct thorough audience research and analysis to understand your viewers' preferences, pain points, and motivations, enabling us to develop scripts that speak directly to their needs and desires.",
  },
  {
    icon: Dynamic,
    header: "Data-Driven Content Optimization",
    desc: "Through comprehensive data analysis and audience insights, we continually optimize your content strategy, ensuring that your scripts and videos resonate with your target audience and drive measurable results.",
  },
];

const scriptWritingFaqs = [
  {
    id: 0,
    question: "What makes Vowatex's YouTube scripts stand out?",
    solution:
      "Our team of skilled scriptwriters possesses a deep understanding of storytelling techniques, audience engagement, and industry-specific knowledge. This unique combination allows us to craft compelling narratives that resonate with your target viewers and effectively convey your brand's message.",
  },
  {
    id: 1,
    question: "Can Vowatex handle various types of YouTube video content?",
    solution:
      "Absolutely! Our scriptwriters have extensive experience crafting scripts for a wide range of YouTube content, including vlogs, product reviews, tutorials, explainer videos, promotional videos, and more. We tailor our approach to suit the specific requirements of each content type.",
  },
  {
    id: 2,
    question: "How does Vowatex ensure brand consistency in YouTube scripts?",
    solution:
      "We prioritize understanding your brand's voice, tone, and messaging guidelines. Through close collaboration with your team, our scriptwriters ensure that each script accurately reflects your brand's identity and maintains consistency across all your YouTube content.",
  },
  {
    id: 3,
    question:
      "Can Vowatex incorporate specific keywords or SEO requirements into the scripts?",
    solution:
      "Yes, we can seamlessly integrate relevant keywords and SEO requirements into our scripts. Our scriptwriters have expertise in optimizing content for search engines while maintaining a natural flow and engaging narrative.",
  },
  {
    id: 4,
    question: "What is the turnaround time for YouTube script projects?",
    solution:
      "The turnaround time can vary depending on the project scope and complexity. However, we strive to deliver high-quality scripts within reasonable timeframes. Our team will provide you with an estimated timeline upfront and work diligently to meet your deadlines.",
  },
];

const Page = () => {
  const [activeId, setActiveId] = useState(0);

  const handleFaqToggle = (id) => {
    setActiveId((prev) => {
      return prev === id ? null : id;
    });
  };

  return (
    <main className={styles.main}>
      <Overview header={"YouTube Script-Writing Services"} tagline={""} />
      <section className={`${styles["unique-sect"]} ${styles["content"]}`}>
        <div className={styles["specifics"]}>
          <h3>We specialize in:</h3>
          <ul>
            <li>Engaging Video Scripts</li>
            <li>Captivating Story Narratives</li>
            <li>Audience-Centric Content</li>
            <li>Brand Voice Development</li>
            <li>Industry-Specific Expertise</li>
          </ul>
        </div>
        <div className={styles["specific-form"]}>
          <header>
            Contact us to set up your content strategy consultation
          </header>
          <Form formType={client} />
        </div>
      </section>

      <section className={`${styles["unique-sect"]} ${styles["about"]}`}>
        <header>Captivating YouTube Scripts that Engage and Convert</header>
        <p className={styles["intro"]}>
          At Vowatex, we understand the power of storytelling in captivating
          audiences and driving conversions on YouTube. Our clients trust us to
          craft compelling video scripts that resonate with their target viewers
          because our process is built around creativity and audience
          engagement.
        </p>
        <div className={styles["services"]}>
          <header>YouTube Script-Writing Services Include:</header>
          <div className={styles["flip-cards"]}>
            {services.map((service) => (
              <Card
                key={service.icon}
                header={service.header}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
          <div className={styles["others"]}>
            <p className={styles["que"]}>Don&apos;t have a specific need?</p>
            <Link href={"./contact"}>
              <p>SCHEDULE A CONVERSATION</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--surface-1)"
                viewBox="0 0 48 48"
                width="15px"
                height="15px"
              >
                <path
                  fill="none"
                  stroke="var(--surface-1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
                />
                <path
                  fill="none"
                  stroke="var(--surface-1)"
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
                  stroke="var(--surface-1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                />
                <polyline
                  fill="none"
                  stroke="var(--surface-1)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  points="27.5,6.5 41.5,6.5 41.5,20.5"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles["unique-sect"]} ${styles["cards"]}`}>
        <div className={styles["card"]}>
          <h3>Crafting Compelling Narratives for Maximum Engagement</h3>
          <ul>
            <li>Captivate your audience with gripping storytelling</li>
            <li>Convey your brand&apos;s unique voice and personality</li>
            <li>
              Leverage industry expertise to deliver authoritative scripts
            </li>
            <li>
              Resonate with your target viewers through audience-centric content
            </li>
          </ul>
        </div>
        <div className={styles["card"]}>
          <h3>Optimized Content for Search Visibility</h3>
          <ul>
            <li>
              Strategically incorporate relevant keywords for improved
              discoverability
            </li>
            <li>
              Enhance your channel&apos;s search rankings and organic traffic
            </li>
            <li>
              Showcase your expertise through informative and engaging scripts
            </li>
            <li>Drive viewer engagement and increase conversions</li>
          </ul>
        </div>
      </section>

      <Reviews />

      <section className={`${styles["unique-sect"]} ${styles[""]}`}>
        <header>FAQs&apos;</header>
        <div className={faqStyles["faqs"]}>
          {scriptWritingFaqs.map((faq) => (
            <motion.div
              key={faq.question}
              className={`${faqStyles["box"]} ${
                activeId === faq.id && faqStyles.active
              }`}
            >
              <button
                onClick={() => {
                  handleFaqToggle(faq.id);
                }}
                className={faqStyles["question"]}
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
                    className={`${faqStyles["solution"]}`}
                  >
                    <motion.p>{faq.solution}</motion.p>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
