import styles from "./page.module.css";
import Form from "../form";
import Reviews from "@/components/reviews/page";

export const metadata = {
  title: "YouTue Automation",
  description: "Let's automate it",
};

const Page = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles["unique-sect"]} ${styles["content"]}`}>
        <article>
          <h1>YouTube Automation Solutions</h1>
          <div className={styles["specifics"]}>
            <h3>We specialize in:</h3>
            <ul>
              <li>Streamlined Content Workflows</li>
              <li>Efficient Video Production Pipelines</li>
              <li>Automated Publishing and Scheduling</li>
              <li>Data-Driven Content Optimization</li>
              <li>Scalable Growth Strategies</li>
            </ul>
          </div>
        </article>
        <div className={styles["specific-form"]}>
          <h3>Contact us to set up your automation solutions consultation</h3>
          <Form />
        </div>
      </section>

      {/* <section className={`${styles["unique-sect"]} ${styles["about"]}`}>
        <header>Captivating YouTube Scripts that Engage and Convert</header>
        <p className={styles["intro"]}>
          At Vowatex, we understand the power of storytelling in captivating
          audiences and driving conversions on YouTube. Our clients trust us to
          craft compelling video scripts that resonate with their target viewers
          because our process is built around creativity and audience
          engagement.
        </p>
        <div className={styles["services"]}>
          <h3>YouTube Script-Writing Services Include:</h3>
          <div className={styles["flip-cards"]}></div>
          <button>SCHEDULE A CONVERSATION</button>
        </div>
      </section>

      <section className={`${styles["unique-sect"]} ${styles[""]}`}>
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
      </section> */}

      <Reviews />
    </main>
  );
};

export default Page;
