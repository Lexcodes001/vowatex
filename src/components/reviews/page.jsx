'use client';
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParallaxText from "@/components/framer/parallax-text";
import DPM1 from "@/images/dpM1.webp";
import DPM2 from "@/images/dpM2.webp";
import DPM3 from "@/images/dpM3.webp";
import DPM4 from "@/images/dpM4.webp";
import DPM5 from "@/images/dpM5.webp";
import DPF1 from "@/images/dpF1.webp";
import DPF2 from "@/images/dpF2.webp";
import Image from "next/image";

const stories = [
  {
    id: 0,
    name: "John Doe",
    username: "geedoe00",
    avatar: DPM1,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 1,
    name: "John Doe",
    username: "geedoe00",
    avatar: DPM2,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 2,
    name: "Jane Doe",
    username: "baddiejane00",
    avatar: DPF1,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 3,
    name: "John Doe",
    username: "geedoe00",
    avatar: DPM3,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 4,
    name: "Jane Doe",
    username: "baddiejane00",
    avatar: DPF2,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 5,
    name: "John Doe",
    username: "geedoe00",
    avatar: DPM4,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
  {
    id: 6,
    name: "John Doe",
    username: "geedoe00",
    avatar: DPM5,
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet et massa venenatis molestie. Pellentesque facilisis lacinia nunc id suscipit. Curabitur laoreet, lorem sit amet facilisis dignissim, magna lacus tristique orci, ullamcorper vehicula est sem at leo. Phasellus id dapibus sapien.",
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
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

const Reviews = ({parallax}) => {
  const [[activeId, direction1], setActiveId] = useState([0, 0]);
  const [newStories, setNewStories] = useState([]);

  const [prevIndex, setPrevIndex] = useState({});

  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const activeStoryIndex = stories.findIndex(
      (story) => story.id === activeId
    );
    const remainingStoryIndexes = stories.filter(
      (story) => story.id !== activeId
    );
    const reorderedStories = [
      ...remainingStoryIndexes.slice(0, 3),
      stories[activeStoryIndex],
      ...remainingStoryIndexes.slice(3),
    ];
    setNewStories([...reorderedStories]);
  }, [activeId]);

  useEffect(() => {
    const newPrevIndex = {};
    newStories.forEach((story, index) => {
      newPrevIndex[story.id] =
        prevIndex[story.id] !== undefined ? prevIndex[story.id] : index;
    });
    setPrevIndex(newPrevIndex);
  }, [newStories]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (mode, newDirection) => {
    if (mode === "discoveries") {
      if (page === 3 && newDirection === 1) {
        setPage([0, newDirection]);
      } else if (page === 0 && newDirection === -1) {
        setPage([3, newDirection]);
      } else {
        setPage([page + newDirection, newDirection]);
      }
    } else {
      if (activeId === 6 && newDirection === 1) {
        setActiveId([0, newDirection]);
      } else if (activeId === 0 && newDirection === -1) {
        setActiveId([6, newDirection]);
      } else {
        setActiveId([activeId + newDirection, newDirection]);
      }
      console.log([activeId, newDirection]);
    }
  };

  return (
    <>
      <section className={styles["stories"]}>
        <header>Reviews</header>
        {parallax && <div className={styles["scroll-effect"]}>
          <ParallaxText baseVelocity={-5}>Testimonials ◦</ParallaxText>
        </div>}
        <div className={styles["user-stories"]}>
          <div className={styles["avatars"]}>
            <AnimatePresence>
              {newStories.map((elem, index) => (
                <motion.span
                  key={elem.id}
                  layout
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    setActiveId([elem.id, elem.id < activeId ? -1 : 1]);
                  }}
                >
                  <Image
                    className={`${activeId === elem.id && styles["active"]}`}
                    src={elem.avatar}
                    alt={`user${elem.id}avatar`}
                  />
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          <motion.article
            key={activeId}
            className={`${styles["slide"]}`}
            custom={direction1}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate("stories", 1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate("stories", -1);
              }
            }}
          >
            <span className={styles["names"]}>
              <p>{stories[activeId].name}</p>
              <p>•</p>
              <p>@{stories[activeId].username}</p>
            </span>
            <span className={styles["testimony"]}>
              {stories[activeId].testimony} {activeId}
            </span>
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default Reviews;
