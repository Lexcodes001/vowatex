"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/contexts/theme";

const variants = {
  center: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  topFade: {
    y: 100,
    opacity: 0,
  },
  bottomFade: {
    y: -100,
    opacity: 0,
  },
  leftFade: {
    x: -50,
    opacity: 0,
  },
  rightFade: {
    x: 50,
    opacity: 0,
  },
  scaleFade: {
    scale: 0.7,
    opacity: 0,
  },
};

const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, theme, changeTheme } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.div className={styles["container"]}>
      <motion.div className={styles["relative"]}>
        <motion.button
          initial={{ rotate: 0 }}
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          exit={{ rotate: 0 }}
          onClick={() => {
            setIsOpen((prev) => {
              return !prev;
            });
          }}
          className={styles["open-btn"]}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="1 1 14 14"
          >
            <path d="M13,7H9V3c0-0.552-0.448-1-1-1S7,2.448,7,3v4H3C2.448,7,2,7.448,2,8s0.448,1,1,1h4v4c0,0.553,0.448,1,1,1s1-0.447,1-1V9h4  c0.553,0,1-0.448,1-1S13.553,7,13,7z" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              onClick={() => {
                setIsOpen(false);
              }}
              initial="scaleFade"
              animate="center"
              exit="scaleFade"
              className={styles["overlay"]}
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                right: "50%",
                scale: 0,
                opacity: 0,
                zIndex: -1,
                transform: "translateY(-50%)",
                transformOrigin: "right",
                top: "50%",
              }}
              animate={
                isOpen && {
                  right: "120%",
                  transform: "translateY(-50%)",
                  transformOrigin: "right",
                  top: "50%",
                  opacity: 1,
                  scale: 1,
                  zIndex: 1,
                }
              }
              exit={{
                right: "50%",
                scale: 0,
                opacity: 0,
                zIndex: -1,
                transform: "translateY(-50%)",
                transformOrigin: "right",
                top: "50%",
              }}
              className={styles["box"]}
            >
              <motion.div className={styles["theme"]}>
                <motion.button
                  title="light theme"
                  onClick={() => {
                    changeTheme("light");
                  }}
                  className={`${mode === "light" ? styles.active : ""}`}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="7 0 125 125"
                  >
                    <g>
                      <g>
                        <g>
                          <path d="M64,94.802c-16.984,0-30.802-13.818-30.802-30.802S47.016,33.198,64,33.198S94.802,47.016,94.802,64     S80.984,94.802,64,94.802z M64,40.198c-13.125,0-23.802,10.678-23.802,23.802S50.875,87.802,64,87.802S87.802,77.125,87.802,64     S77.125,40.198,64,40.198z" />
                        </g>
                        <g>
                          <path d="M64,29.517c-1.933,0-3.5-1.567-3.5-3.5V12.183c0-1.933,1.567-3.5,3.5-3.5s3.5,1.567,3.5,3.5v13.834     C67.5,27.95,65.933,29.517,64,29.517z" />
                        </g>
                        <g>
                          <path d="M90.858,40.643c-0.896,0-1.792-0.342-2.475-1.025c-1.367-1.367-1.367-3.583,0-4.95l9.783-9.784     c1.367-1.367,3.583-1.367,4.95,0c1.367,1.367,1.367,3.583,0,4.95l-9.783,9.784C92.649,40.301,91.753,40.643,90.858,40.643z" />
                        </g>
                        <g>
                          <path d="M101.981,67.501c-1.933,0-3.5-1.567-3.5-3.5c0-1.933,1.567-3.5,3.5-3.5l13.836-0.001c1.933,0,3.5,1.567,3.5,3.5     c0,1.933-1.567,3.5-3.5,3.5L101.981,67.501z" />
                        </g>
                        <g>
                          <path d="M100.641,104.141c-0.896,0-1.791-0.342-2.475-1.025l-9.785-9.783c-1.367-1.367-1.367-3.583,0-4.95     c1.367-1.367,3.582-1.367,4.95,0l9.785,9.783c1.367,1.367,1.367,3.583,0,4.95C102.432,103.799,101.537,104.141,100.641,104.141z" />
                        </g>
                        <g>
                          <path d="M64,119.317c-1.933,0-3.5-1.566-3.5-3.5l-0.002-13.836c0-1.933,1.566-3.5,3.5-3.5s3.5,1.566,3.5,3.5l0.002,13.836     C67.5,117.75,65.934,119.317,64,119.317z" />
                        </g>
                        <g>
                          <path d="M27.359,104.141c-0.896,0-1.791-0.341-2.475-1.024c-1.367-1.367-1.367-3.583-0.001-4.95l9.781-9.785     c1.367-1.367,3.583-1.368,4.95-0.001c1.367,1.367,1.367,3.583,0.001,4.95l-9.781,9.785     C29.151,103.799,28.255,104.141,27.359,104.141z" />
                        </g>
                        <g>
                          <path d="M12.183,67.5c-1.933,0-3.5-1.566-3.5-3.5s1.566-3.5,3.5-3.5l13.834-0.002c1.933,0,3.5,1.566,3.5,3.5s-1.566,3.5-3.5,3.5     L12.183,67.5z" />
                        </g>
                        <g>
                          <path d="M37.142,40.641c-0.896,0-1.792-0.342-2.475-1.025l-9.783-9.782c-1.367-1.367-1.367-3.583,0-4.95     c1.367-1.367,3.583-1.367,4.95,0l9.783,9.782c1.367,1.367,1.367,3.583,0,4.95C38.934,40.299,38.038,40.641,37.142,40.641z" />
                        </g>
                      </g>
                      <g>
                        <path d="M50.497,62.5c-0.613,0-1.233-0.161-1.797-0.499c-1.658-0.995-2.195-3.145-1.201-4.802c3.411-5.685,8.966-9.06,9.201-9.201    c1.658-0.993,3.807-0.457,4.802,1.201c0.993,1.655,0.458,3.801-1.194,4.798c-0.101,0.062-4.335,2.685-6.806,6.804    C52.845,61.895,51.686,62.5,50.497,62.5z" />
                      </g>
                    </g>
                  </motion.svg>
                </motion.button>
                <motion.button
                  title="system default"
                  onClick={() => {
                    changeTheme("default");
                  }}
                  className={`${mode === "default" ? styles.active : ""}`}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8.5 8"
                    version="1.1"
                  >
                    <g transform="translate(0,-288.53332)">
                      <path
                        d="M 4.0019531,4 C 2.3572855,4 0.99609375,5.3533477 0.99609375,6.9980469 V 21.001953 c -4e-8,1.644699 1.36119175,2.996094 3.00585935,2.996094 h 6.9960939 v 1.974609 c -0.210537,0.0073 -1.039063,0.02539 -1.0390626,0.02539 -1.3346348,0.05338 -1.2545572,2.055338 0.080078,2.001953 3.945552,0.0094 8.127349,-0.09263 11.914063,0 1.334635,0.0599 1.424479,-1.942057 0.08984,-2.001953 -0.348436,-0.01514 -0.690699,-0.01372 -1.041016,-0.02539 V 23.998047 H 28 c 1.644667,0 2.996094,-1.351395 2.996094,-2.996094 V 6.9980469 C 30.996094,5.3533477 29.644667,4 28,4 Z m 0,2.0019531 H 28 c 0.571268,0 1.003906,0.4248182 1.003906,0.9960938 V 21.001953 c 0,0.571276 -0.432638,0.996094 -1.003906,0.996094 -7.999349,0 -15.998698,0 -23.9980469,0 -0.5712693,0 -1.0058593,-0.424818 -1.0058593,-0.996094 V 6.9980469 c 0,-0.1428189 0.028636,-0.2762759 0.078125,-0.3964844 0.148466,-0.3606254 0.4992823,-0.5996094 0.9277343,-0.5996094 z m 0.9960938,0.9960938 c -0.5522634,0.00221 -0.9982,0.4516424 -0.9960938,1.0039062 v 3.9999999 c -0.030234,1.363231 2.0302336,1.363231 2,0 V 8.9980469 h 2.9960938 c 1.3624341,0.029419 1.3624341,-2.0294189 0,-2 z M 13,23.998047 h 6.001953 v 1.925781 c -2.000752,-0.06054 -4.198915,-0.0372 -6.001953,0 z"
                        transform="matrix(0.26458333,0,0,0.26458333,0,288.53332)"
                      />
                    </g>
                  </motion.svg>
                </motion.button>
                <motion.button
                  title="dark theme"
                  onClick={() => {
                    changeTheme("dark");
                  }}
                  className={`${mode === "dark" ? styles.active : ""}`}
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 98 98"
                  >
                    <g transform="translate(0,-952.36218)">
                      <path
                        d="m 35.377874,961.36325 a 3.0003,3.0003 0 0 0 -0.9063,0.1875 c -16.1759,5.9947 -25.4686997,21.7109 -25.4686997,39.59375 0,23.2769 18.9104997,42.2187 42.1873997,42.2187 17.8829,0 33.6304,-9.324 39.625,-25.5 a 3.0003,3.0003 0 0 0 -3.9374,-3.8125 c -4.0936,1.6462 -8.5949,2.5 -13.3438,2.5 -19.5969,0 -37.7188,-18.15315 -37.7188,-37.74995 0,-4.7489 0.8226,-9.2504 2.4688,-13.3437 a 3.0003,3.0003 0 0 0 -2.9062,-4.0938 z m -4.6563,8.7188 c -0.5822,2.8241 -0.9063,5.7363 -0.9063,8.7187 0,23.21085 20.5079,43.74995 43.7188,43.74995 2.9824,0 5.8946,-0.3553 8.7188,-0.9375 -6.2657,10.0487 -17.6431,15.75 -31.0626,15.75 -20.0342,0 -36.1874,-16.1844 -36.1874,-36.2187 0,-13.42105 5.6679,-24.79725 15.7187,-31.06245 z"
                        fillOpacity="1"
                        stroke="none"
                        marker="none"
                        visibility="visible"
                        display="inline"
                        overflow="visible"
                      />
                    </g>
                  </motion.svg>
                </motion.button>
              </motion.div>
              {isVisible && (
                <motion.span
                  onClick={() => {
                    scrollToTop();
                  }}
                >
                  <motion.p>Scroll to top</motion.p>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 30"
                    enable-background="new 0 0 24 24"
                  >
                    <path d="M12,2C6.4858398,2,2,6.4858398,2,12s4.4858398,10,10,10c5.5136719,0,10-4.4858398,10-10S17.5136719,2,12,2z M12,20  c-4.4111328,0-8-3.5888672-8-8s3.5888672-8,8-8s8,3.5888672,8,8S16.4111328,20,12,20z M15.7070313,9.2929688  c0.390625,0.390625,0.390625,1.0234375,0,1.4140625C15.5117188,10.9023438,15.2558594,11,15,11  s-0.5117188-0.0976563-0.7070313-0.2929688L13,9.4140625V17c0,0.5522461-0.4477539,1-1,1s-1-0.4477539-1-1V9.4140625  l-1.2929688,1.2929688c-0.390625,0.390625-1.0234375,0.390625-1.4140625,0s-0.390625-1.0234375,0-1.4140625l3-3  c0.390625-0.390625,1.0234375-0.390625,1.4140625,0L15.7070313,9.2929688z" />
                  </motion.svg>
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Toggle;
