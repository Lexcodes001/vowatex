"use client";
import styles from "./page.module.css";
import Image from "next/image";
import AdminIcon from "@/images/admin.jpeg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "@/lib/variants";
import Logo from "@/images/logo.svg";
import useScreenMode from "@/hooks/useScreenMode";
import Hamburger from "hamburger-react";
import AnimatedText from "@/components/framer/text-animation";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Notification from "@/components/admin/notification/page"

const Body = ({pathname, screenMode}) => {
    return (
      <main className={styles["nav"]}>
        <div className={`${styles["sections"]}`}>
          {screenMode === "desktop" && (
            <section className={styles.sect}>
              <div className={`${styles["box"]}`}>
                <Image src={Logo} alt="Vowatex" />
                <header>
                  <AnimatedText speed={0.3} text={"Vowatex."} once />
                </header>
              </div>
            </section>
          )}
          <section className={styles.sect}>
            <p className={styles["header"]}>OVERVIEW</p>
            <Link href={"/admin"} className={`${styles.item} ${styles.active}`}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--text-2)"
                >
                  <path d="M520-640v-160q0-17 11.5-28.5T560-840h240q17 0 28.5 11.5T840-800v160q0 17-11.5 28.5T800-600H560q-17 0-28.5-11.5T520-640ZM120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" />
                </svg>
              </span>
              <div className={styles.status}>
                <p>Dashboard</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--text-2)"
                  >
                    <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href={"/admin/messages"} className={styles.item}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--text-2)"
                >
                  <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Zm120-80h240q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480H280q-17 0-28.5 11.5T240-440q0 17 11.5 28.5T280-400Zm0-120h400q17 0 28.5-11.5T720-560q0-17-11.5-28.5T680-600H280q-17 0-28.5 11.5T240-560q0 17 11.5 28.5T280-520Zm0-120h400q17 0 28.5-11.5T720-680q0-17-11.5-28.5T680-720H280q-17 0-28.5 11.5T240-680q0 17 11.5 28.5T280-640Z" />
                </svg>
              </span>
              <div className={styles.status}>
                <p>Messages</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="var(--text-2)"
                  >
                    <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href={"/admin/users"} className={styles.item}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--text-2)"
                >
                  <path d="M40-272q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v32q0 33-23.5 56.5T600-160H120q-33 0-56.5-23.5T40-240v-32Zm800 112H738q11-18 16.5-38.5T760-240v-40q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v40q0 33-23.5 56.5T840-160ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                </svg>
              </span>
              <div className={styles.status}>
                <p>Users</p>
                <span>
                  <p>419</p>
                </span>
              </div>
            </Link>
            <Link href={"/admin/jobs"} className={styles.item}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--text-2)"
                >
                  <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                </svg>
              </span>
              <div className={styles.status}>
                <p>Jobs</p>
                <span>
                  <p>123</p>
                </span>
              </div>
            </Link>
            <Link href={"/admin/analytics"} className={styles.item}>
              <span className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="var(--text-2)"
                >
                  <path d="M320-480q-17 0-28.5 11.5T280-440v120q0 17 11.5 28.5T320-280q17 0 28.5-11.5T360-320v-120q0-17-11.5-28.5T320-480Zm320-200q-17 0-28.5 11.5T600-640v320q0 17 11.5 28.5T640-280q17 0 28.5-11.5T680-320v-320q0-17-11.5-28.5T640-680ZM480-400q-17 0-28.5 11.5T440-360v40q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320v-40q0-17-11.5-28.5T480-400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm280 280q17 0 28.5-11.5T520-520q0-17-11.5-28.5T480-560q-17 0-28.5 11.5T440-520q0 17 11.5 28.5T480-480Z" />
                </svg>
              </span>
              <div className={styles.status}>
                <p>Analytics</p>
                <span>
                  <p>Coming soon...</p>
                </span>
              </div>
            </Link>
          </section>
        </div>

        <section className={styles.hero}>
          <div>
            <span>
              <Image alt="admin-icon" src={AdminIcon} />
            </span>
            <p>Freeman</p>
          </div>
        </section>
      </main>
    );
}

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const screenMode = useScreenMode();

  return (
    <nav>
      {screenMode === "desktop" ? (
        <Body pathname={pathname} screenMode={screenMode} />
      ) : (
        <>
          {isOpen && (
            <>
              <motion.div
                variants={Variants}
                initial="fade"
                whileInView="center"
                transition={{
                  duration: 0.5,
                  easings: "easeOut",
                  staggerChildren: 0.5,
                }}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={styles.overlay}
              ></motion.div>
              <div className={`${styles["fixed"]}`}>
                <Body pathname={pathname} screenMode={screenMode} />
              </div>
            </>
          )}
          <div className={`${styles["sticky"]} ${isOpen && styles.isOpen}`}>
            <div className={`${styles["box"]} ${styles.logoBox}`}>
              <span
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
              </span>
              <header>
                <AnimatedText speed={0.3} text={"Vowatex."} once />
              </header>
            </div>
            <Notification />
          </div>
        </>
      )}
    </nav>
  );

  
}
