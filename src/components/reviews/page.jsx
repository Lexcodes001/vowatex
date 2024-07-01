"use client";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ParallaxText from "@/components/framer/parallax-text";
import dp1 from "@/images/dp1.webp";
import dp2 from "@/images/dp2.webp";
import dp3 from "@/images/dp3.webp";
import dp4 from "@/images/dp4.webp";
import dp5 from "@/images/dp5.webp";
import dp6 from "@/images/dp6.webp";
import dp7 from "@/images/dp7.webp";
import Image from "next/image";

const stories = [
  {
    id: 0,
    name: "Alexander Wright",
    username: "alexwright123",
    avatar: dp1,
    testimony:
      "VOWATEX has completely transformed my approach to content creation for my YouTube channel. Before discovering their services, I struggled with generating engaging content ideas and maintaining a consistent upload schedule. The script-writing service they provide is nothing short of exceptional. Each script is meticulously crafted, thoroughly researched, and tailored to my audience's interests. The result has been a dramatic increase in viewer engagement, watch time, and subscriber growth. My videos are now more coherent and captivating, keeping viewers hooked from start to finish. Additionally, their team is incredibly responsive and open to feedback, ensuring that each script meets my exact needs. VOWATEX has not only elevated the quality of my content but also allowed me to focus on other aspects of my channel, making the entire content creation process much more enjoyable and efficient. I wholeheartedly recommend VOWATEX to any content creator looking to take their channel to the next level.",
  },
  {
    id: 1,
    name: "Samantha Lee",
    username: "samanthalee_tv",
    avatar: dp3,
    testimony:
      "Utilizing VOWATEX's automation services has been a game-changer for my YouTube channel. Managing a channel with frequent uploads can be overwhelming, but VOWATEX's automation tools have streamlined the process significantly. From automated video uploads to scheduling and even managing comments, their service has taken the technical burden off my shoulders. The automation workflows are intuitive and robust, allowing me to focus more on creating content and engaging with my audience rather than being bogged down by administrative tasks. This shift has not only saved me countless hours but also improved my channel's overall performance. I now have the time and energy to produce higher quality content, which has resulted in increased viewership and subscriber growth. VOWATEX's automation service is an essential tool for any serious YouTuber looking to optimize their workflow and achieve sustainable growth.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    username: "mike_thompson",
    avatar: dp2,
    testimony:
      "Before I started using VOWATEX, maintaining a consistent content schedule for my YouTube channel was a constant struggle. Their script-writing service has been a revelation. The scripts are not only well-written and engaging but also perfectly tailored to my channel's niche and audience preferences. This level of customization has made a noticeable difference in my content's quality and reception. My videos are now more polished and professional, which has significantly boosted my channel's reputation and subscriber count. Additionally, the process of collaborating with VOWATEX is seamless. Their team is always receptive to my input and ensures that each script aligns with my vision. Since partnering with VOWATEX, I've seen a marked improvement in my channel's performance, with higher engagement rates and more positive viewer feedback. VOWATEX has become an indispensable part of my content creation strategy, and I can't imagine going back to the way things were before.",
  },
  {
    id: 3,
    name: "Jessica Alvarez",
    username: "jessalvarez_yt",
    avatar: dp4,
    testimony:
      "VOWATEX's automation services have been a true lifesaver for my YouTube channel. Juggling content creation with the technical aspects of running a channel can be incredibly challenging, but VOWATEX has simplified everything. Their automation tools handle everything from scheduling uploads to managing comments, freeing me up to focus on what I love most – creating content. The impact on my productivity has been immense. I no longer have to worry about missing an upload or spending hours on administrative tasks. Instead, I can devote my time and energy to brainstorming new ideas and improving my videos. This shift has not only enhanced the quality of my content but also boosted my channel's growth. My viewers appreciate the consistency, and I've seen a steady increase in engagement and subscriber numbers. VOWATEX's automation services are a must-have for any content creator looking to streamline their workflow and maximize their channel's potential.",
  },
  {
    id: 4,
    name: "Robert King",
    username: "robertking_vlogs",
    avatar: dp5,
    testimony:
      "As a vlogger, coming up with fresh and engaging content ideas can be a daunting task. Thankfully, VOWATEX's script-writing service has been an incredible asset. Their team of talented writers consistently delivers scripts that are both creative and relevant to my audience. Each script is meticulously crafted to ensure maximum engagement and viewer retention. Since I started using VOWATEX, my videos have become more dynamic and captivating, resulting in a noticeable increase in watch time and subscriber growth. The quality of my content has improved dramatically, and my viewers have taken notice. I receive more positive feedback and comments than ever before. VOWATEX's script-writing service has not only enhanced my content but also reignited my passion for vlogging. Their professionalism, attention to detail, and commitment to excellence make them an invaluable partner for any YouTuber looking to elevate their content and achieve greater success.",
  },
  {
    id: 5,
    name: "Emily Roberts",
    username: "emily_roberts_tv",
    avatar: dp7,
    testimony:
      "VOWATEX's automation services have been a transformative addition to my YouTube workflow. Managing a successful channel involves countless behind-the-scenes tasks, from uploading videos to scheduling and responding to comments. VOWATEX has taken the hassle out of these processes with their advanced automation tools. The system is incredibly user-friendly and efficient, allowing me to set up automated workflows that handle all the repetitive tasks. This has freed up a significant amount of my time, enabling me to focus on creating more engaging and high-quality content for my viewers. The impact on my channel's growth has been remarkable. I've seen a substantial increase in viewer engagement and subscriber numbers since I started using VOWATEX. Their automation services are an essential tool for any YouTuber looking to optimize their workflow, reduce stress, and achieve sustainable growth. I can't recommend VOWATEX highly enough.",
  },
  {
    id: 6,
    name: "David Johnson",
    username: "davidjohnson_youtube",
    avatar: dp6,
    testimony:
      "VOWATEX's script-writing service is nothing short of phenomenal. Before partnering with them, I struggled to keep my content fresh and engaging. Their team of expert writers took the time to understand my channel's niche and audience, delivering scripts that are both captivating and informative. The level of detail and creativity in each script has elevated my videos to a whole new level. My viewers have noticed the difference, and I've received an overwhelming amount of positive feedback. The increase in engagement and subscriber growth has been impressive. Working with VOWATEX has not only improved the quality of my content but also made the entire content creation process more enjoyable and less stressful. Their professionalism, creativity, and dedication to excellence make them an invaluable partner for any YouTuber. I can't imagine going back to creating content without their support. VOWATEX is simply the best in the business.",
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

const Reviews = ({ parallax }) => {
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
    }
  };

  return (
    <>
      <section className={styles["stories"]}>
        <header>Reviews</header>
        {parallax && (
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Testimonials ◦</ParallaxText>
          </div>
        )}
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
            <div className={styles["testimony"]}>
              <span className={styles.quotes}>“</span>
              <p>{stories[activeId].testimony}</p>
              <span className={styles.quotes}>”</span>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
};

export default Reviews;
