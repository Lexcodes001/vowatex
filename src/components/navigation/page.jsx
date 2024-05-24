"use client";
import Hamburger from "hamburger-react";
import styles from "./page.module.css";
import Image from "next/image";
import { Links } from "./constants";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/images/logo.svg";
import Link from "next/link";

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

  return (
    <nav
      className={`${styles.nav}
      `}
    >
      <div className={styles.navbar}>
        <div className={styles["box"]}>
          <Image src={Logo} alt="Vowatex" />
          <header>Vowatex.</header>
        </div>
        <div className={styles["sm"]}>
          <span className={`${styles["toggle"]} ${isOpen && styles.isOpen}`}>
            <Hamburger
              size={20}
              distance="sm"
              rounded
              toggled={isOpen}
              color={"var(--text-2)"}
              toggle={() => setIsOpen((isOpen) => !isOpen)}
            />
          </span>
        </div>
        <div className={styles["lg"]}>
          <div className={styles.links}>
            {Links.map((item) => (
              <Link
                href={item.url}
                key={item.id}
                className={`${pathname === item.url ? styles.active : ""}`}
              >
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.sidemenu}>
          <div className={styles["content"]}>
            <div className={styles.links}>
              <header>Quick Links</header>
              {Links.map((item) => (
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  href={item.url}
                  key={item.id}
                  className={`${pathname === item.url ? styles.active : ""}`}
                >
                  <span>{item.icon}</span>
                  <p>{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
