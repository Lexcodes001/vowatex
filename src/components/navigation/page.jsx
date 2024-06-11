"use client";
import Hamburger from "hamburger-react";
import AnimatedText from "@/components/framer/text-animation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import { Links } from "./constants";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/images/logo.svg";
import Link from "next/link";
import { Variants } from "@/lib/variants";

// function useSticky() {
//   const ref = useRef(null);
//   const [isSticky, setIsSticky] = useState(false);

//   function onSticky(selector, callback) {
//     const element =
//       typeof selector === "string"
//         ? document.querySelector(selector)
//         : selector;

//     if (!element) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([event]) => callback(event.intersectionRatio < 1),
//       { threshold: [1], rootMargin: "-1px 0px 0px 0px" }
//     );
//     observer.observe(element);

//     return { observer, element };
//   }

//   useEffect(() => {
//     if (!ref.current) {
//       return;
//     }
//     const sticky = onSticky(ref.current, setIsSticky);

//     return () => sticky?.observer.unobserve(sticky?.element);
//   }, []);

//   return { isSticky, ref };
// }

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${!isVisible && styles.isAtTop}
      `}
    >
      <div className={styles.navbar}>
        <motion.div
          variants={Variants}
          custom={20}
          initial="leftFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={styles["box"]}
        >
          <Image src={Logo} alt="Vowatex" />
          <header>
            <AnimatedText speed={0.3} text={"Vowatex."} once />
          </header>
        </motion.div>
        <div className={styles["sm"]}>
          <motion.span
            variants={Variants}
            custom={20}
            initial="scaleFade"
            whileInView="center"
            transition={{
              duration: 1,
              easings: "easeOut",
              staggerChildren: 0.5,
            }}
            className={`${styles["toggle"]} ${isOpen && styles.isOpen}`}
          >
            <Hamburger
              size={20}
              distance="sm"
              rounded
              toggled={isOpen}
              color={"var(--text-2)"}
              toggle={() => setIsOpen((isOpen) => !isOpen)}
            />
          </motion.span>
        </div>
        <div className={styles["lg"]}>
          <div className={styles.links}>
            {Links.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className={`${pathname === item.url ? styles.active : ""}`}
              >
                <motion.span
                  variants={Variants}
                  initial="scaleFade"
                  whileInView="center"
                  transition={{
                    duration: 1,
                    easings: "easeOut",
                    staggerChildren: 0.5,
                  }}
                >
                  {item.icon}
                </motion.span>
                <motion.p
                  variants={Variants}
                  initial="leftFade"
                  whileInView="center"
                  transition={{
                    duration: 0.5,
                    easings: "easeOut",
                    staggerChildren: 0.5,
                  }}
                >
                  {item.name}
                </motion.p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          variants={Variants}
          initial="leftFade"
          whileInView="center"
          transition={{
            duration: 0.5,
            easings: "easeOut",
            staggerChildren: 0.5,
          }}
          className={styles.sidemenu}
        >
          <div className={styles["content"]}>
            <div className={styles.links}>
              <motion.header
                variants={Variants}
                initial="leftFade"
                whileInView="center"
                transition={{
                  duration: 0.5,
                  easings: "easeOut",
                }}
              >
                Quick Links
              </motion.header>
              {Links.map((item) => (
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={item.url}
                  key={item.id}
                  className={`${pathname === item.url ? styles.active : ""}`}
                >
                  <motion.span
                    variants={Variants}
                    initial="scaleFade"
                    whileInView="center"
                    transition={{
                      duration: 1,
                      easings: "easeOut",
                      staggerChildren: 0.5,
                    }}
                  >
                    {item.icon}
                  </motion.span>
                  <motion.p
                    variants={Variants}
                    initial="leftFade"
                    whileInView="center"
                    transition={{
                      duration: 0.5,
                      easings: "easeOut",
                      staggerChildren: 0.5,
                    }}
                  >
                    {item.name}
                  </motion.p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
