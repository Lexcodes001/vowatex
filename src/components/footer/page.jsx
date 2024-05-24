"use client";
import Image from "next/image";
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
            <div className={styles["box"]}>
              <Image src={Logo} alt="Vowatex" />
              <header>Vowatex.</header>
            </div>
            <p>
              Vowatex specializes in crafting captivating YouTube scripts and
              automation strategies tailored to your brand&apos;s storytelling
              prowess and audience engagement goals. Partner with us to command
              success on your YouTube journey.
            </p>
          </div>
          <div className={styles["links"]}>
            <section>
              <header>VOWATEX</header>
              <div>
                {Links.map((item) => (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
            <section>
              <header>ABOUT</header>
              <div>
                {About.map((item) => (
                  <Link
                    href={item.url}
                    key={item.id}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </section>
            <section className={styles["socials"]}>
              <header>SOCIALS</header>
              <div>
                {Socials.map((item) => (
                  <Link
                    href={item.url}
                    key={item.url}
                    className={`${pathname === item.url ? styles.active : ""}`}
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className={styles["bottom"]}>
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
            <p>Website By Lexthegreat00_</p>
          </div>
        </div>
      </main>
    </footer>
  );
}
