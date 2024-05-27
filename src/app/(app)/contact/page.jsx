import Image from "next/image";
import Overview from "@/components/overview/page";
import Reviews from "@/components/reviews/page";
import Form from "./form";
import styles from "./page.module.css";
import Link from "next/link";
import Access from "@/images/access.webp";
import Dynamic from "@/images/dynamic.webp";
import Scalable from "@/images/scalable.webp";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Overview
        header={"CONTACT US"}
        tagline={
          "We collaborate with remarkable individuals who excel in the art of crafting captivating content"
        }
      />

      <section className={`${styles["contact-sect"]} ${styles["form-box"]}`}>
        <header>Let&apos;s Discuss Your Channel&apos;s Content Goals</header>
        <Form />
      </section>

      <section className={`${styles["contact-sect"]} ${styles["about"]}`}>
        <header>
          Crafting Captivating Stories, Automating Success on YouTube
        </header>
        <article>
          <span>
            <Image src={Dynamic} alt="dynamic" />
            <p>
              Dynamic YouTube scripts designed to captivate your audience and
              keep viewers engaged to your channel.
            </p>
          </span>
          <span>
            <Image src={Scalable} alt="scalable" />
            <p>
              Our scalable platform streamlines the content creation process,
              allowing you to order compelling scripts with just a few clicks.
            </p>
          </span>
          <span>
            <Image src={Access} alt="access" />
            <p>
              Gain access to our industry-leading team ensuring cutting-edge
              automation solutions optimize workflows for efficiency.
            </p>
          </span>
        </article>
      </section>

      <section className={`${styles["contact-sect"]} ${styles["learn-more"]}`}>
        <h3>For a more personalized experience...</h3>
        <div className={styles["cards"]}>
          <Link href={"./contact/yt-script-writing"} className={styles["card"]}>
            <h2>Get to know our script-writing services</h2>
            <div>
              <p>Learn more</p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
                />
                <path
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"
                />
                <line
                  x1="23.5"
                  x2="41.5"
                  y1="24.5"
                  y2="6.5"
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
                <polyline
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  points="27.5,6.5 41.5,6.5 41.5,20.5"
                />
              </svg>
            </div>
          </Link>
          <Link href={"./contact/yt-automation"} className={styles["card"]}>
            <h2>Get to know our automation services</h2>
            <div>
              <p>Learn more</p>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M6.5,20.5v-5c0-3.3,2.7-6,6-6h10"
                />
                <path
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M38.5,25.5v10c0,3.3-2.7,6-6,6h-20c-3.3,0-6-2.7-6-6v-7"
                />
                <line
                  x1="23.5"
                  x2="41.5"
                  y1="24.5"
                  y2="6.5"
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                />
                <polyline
                  fill="none"
                  stroke="var(--brand)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
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
