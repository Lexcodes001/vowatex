"use client";
import styles from "./page.module.css";
import faqStyles from "../../faq/page.module.css";
import Form from "../../contact/form";
import Reviews from "@/components/reviews/page";
import Overview from "@/components/overview/page";
import Card from "@/components/flip-card/page";
import ContentManagement from "@/images/content-management.webp";
import Video from "@/images/video.webp";
import Schedule from "@/images/schedule.webp";
import Automate from "@/images/icons-automate.webp";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: ContentManagement,
    header: "Efficient Content Management",
    desc: "Our platform seamlessly integrates with your existing content management systems, allowing for efficient collaboration, review processes, and version control, ensuring a smooth and organized workflow.",
  },
  {
    icon: Video,
    header: "Automated Video Production",
    desc: "Leveraging advanced automation tools, we streamline video production tasks such as editing, rendering, and encoding, enabling you to focus on creativity while we handle the technical aspects.",
  },
  {
    icon: Schedule,
    header: "Optimized Publishing and Scheduling",
    desc: "Our automation solutions optimize the publishing and scheduling of your YouTube videos, ensuring that your content reaches your audience at the most opportune times for maximum engagement and visibility.",
  },
  {
    icon: Automate,
    header: "Seamless YouTube Automation for Streamlined Workflows",
    desc: "At Vowatex, we recognize the importance of efficiency in the fast-paced world of content creation. Our cutting-edge automation solutions are designed to streamline your YouTube workflow, from script development to video publication.",
  },
];

const automationFaqs = [
  {
    id: 0,
    question:
      "What automation tools does Vowatex use for YouTube content creation?",
    solution:
      "At Vowatex, we leverage a suite of cutting-edge automation tools and workflows to streamline the entire content creation process. From ideation and script development to video production, publishing, and scheduling, our solutions are designed to optimize efficiency and productivity.",
  },
  {
    id: 1,
    question:
      "How does Vowatex's automation integrate with existing content management systems?",
    solution:
      "Our automation solutions are designed to seamlessly integrate with your existing content management systems, ensuring a smooth and organized workflow. This integration allows for efficient collaboration, review processes, and version control, minimizing disruptions to your established processes.",
  },
  {
    id: 2,
    question:
      "Can Vowatex's automation solutions scale as my YouTube channel grows?",
    solution:
      "Absolutely! Our automation solutions are built with scalability in mind. As your YouTube channel grows and your content needs increase, our platform can adapt and handle higher volumes of content production, ensuring a consistent level of quality and efficiency.",
  },
  {
    id: 3,
    question:
      "Does Vowatex provide training and support for their automation tools?",
    solution:
      "Yes, we understand that adopting new automation tools can be a learning curve. Our team provides comprehensive training and ongoing support to ensure that you and your team can fully utilize our automation solutions and maximize their benefits.",
  },
  {
    id: 4,
    question: "How does Vowatex's automation process ensure quality control?",
    solution:
      "Quality control is a top priority for us. Our automation solutions incorporate various checkpoints and review processes, allowing our team to meticulously evaluate the content at each stage. This rigorous approach ensures that the final output meets our high standards of quality and aligns with your brand's requirements.",
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
      <Overview header={"YouTube Automation Solutions"} tagline={""} />
      <section className={`${styles["unique-sect"]} ${styles["content"]}`}>
        <div className={styles["specifics"]}>
          <header>Specialization in:</header>
          <ul>
            <li>Streamlined Content Workflows</li>
            <li>Efficient Video Production Pipelines</li>
            <li>Automated Publishing and Scheduling</li>
            <li>Data-Driven Content Optimization</li>
            <li>Scalable Growth Strategies</li>
          </ul>
        </div>
        <div className={styles["specific-form"]}>
          <header>
            Contact us to set up your automation solutions consultation
          </header>
          <Form formType={'client'}/>
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
          <h3>Elevating Efficiency and Productivity</h3>
          <ul>
            <li>
              Seamless integration with your existing content management systems
            </li>
            <li>Convey your brand&apos;s unique voice and personality</li>
            <li>Optimized publishing and scheduling for maximum visibility</li>
            <li>Data-driven insights for continuous content optimization</li>
            <li>Scalable solutions to support your channel&apos;s growth</li>
          </ul>
        </div>
        <div className={styles["card"]}>
          <h3>Tailored to Your Unique Needs</h3>
          <ul>
            <li>Localized content and landing pages for targeted reach</li>
            <li>Compelling video scripts for various content formats</li>
            <li>Comprehensive FAQs and support documentation</li>
            <li>Customized solutions to meet your specific requirements</li>
          </ul>
        </div>
      </section>

      <Reviews />

      <section className={`${styles["unique-sect"]} ${styles[""]}`}>
        <header>FAQs&apos;</header>
        <div className={faqStyles["faqs"]}>
          {automationFaqs.map((faq) => (
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
