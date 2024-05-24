"use client";
import Navigation from "@/components/navigation/page";
import Footer from "@/components/footer/page";
import styles from "./page.module.css";
import Image from "next/image";
import Unleash from "@/images/unleash.svg";
import Why from "@/images/why.svg";
import Increase from "@/images/increase.jpg";
import Writing from "@/images/writing.jpg";
import Brand from "@/images/brand.jpg";
import Content from "@/images/content.jpg";
import Storytelling from "@/images/storytelling.svg";
import Engagement from "@/images/engagement.svg";
import Automation from "@/images/automation.svg";
import Crowd from "@/images/icons-crowd.png";
import Project from "@/images/icons-project.png";
import Countries from "@/images/icons-countries.png";
import DPM1 from "@/images/dpM1.jpg";
import DPM2 from "@/images/dpM2.jpg";
import DPM3 from "@/images/dpM3.jpg";
import DPM4 from "@/images/dpM4.jpg";
import DPM5 from "@/images/dpM5.jpg";
import DPF1 from "@/images/dpF1.jpg";
import DPF2 from "@/images/dpF2.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactPip from "./(app)/contact/cip";
import ParallaxText from "@/components/framer/parallax-text";
import Values from "./(app)/about/values";

const solutions = [
  {
    header: "Script Mastery",
    desc: "Our scriptwriting wizards craft spellbinding narratives that captivate your YouTube audience, igniting engagement and driving remarkable returns.",
    img: Writing,
  },
  {
    header: "Automation Artistry",
    desc: "Harness the power of Vowatex's cutting-edge automation solutions, streamlining your YouTube journey and amplifying your reach with surgical precision.",
    img: Increase,
  },
  {
    header: "Audience Resonance",
    desc: "Our scripts resonate with your target audience, leaving an indelible mark on their minds and forging unbreakable connections that command unwavering attention.",
    img: Content,
  },
  {
    header: "Data-Driven Dominance",
    desc: "Vowatex's data-driven strategies fuel our scriptwriting and automation solutions, eclipsing the competition and propelling your YouTube presence to unprecedented heights.",
    img: Brand,
  },
];

const steps = [
  {
    id: 1,
    header: "Initiate Liftoff",
    desc: "Kickstart your journey into captivating YouTube content creation by reaching out to Vowatex™ today. Our scriptwriting and automation experts are ready to propel your channel to new heights.",
  },
  {
    id: 2,
    header: "Mission Briefing",
    desc: "We'll schedule an in-depth consultation to understand your brand's essence, target audience, and creative objectives for your YouTube channel.",
  },
  {
    id: 3,
    header: "Tailored Trajectory",
    desc: "Armed with a comprehensive understanding of your needs, our team will craft a customized plan, meticulously tailoring our scriptwriting and automation strategies to align with your cosmic goals.",
  },
  {
    id: 4,
    header: "Launch Sequence Initiated",
    desc: "Once you approve our tailored approach, we'll commence production, bringing your captivating YouTube scripts and automated workflows to life.",
  },
  {
    id: 5,
    header: "Collaborative Propulsion",
    desc: "Throughout the process, we'll work closely with you, ensuring a seamless collaboration as we propel your channel towards unprecedented success, achieving your desired outcomes.",
  },
];

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

const textArray = [
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={0}
  >
    Captivate viewers
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={1}
  >
    Script huge success
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={2}
  >
    Automate growth
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={3}
  >
    Amplify engagement
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={4}
  >
    Level up content
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={5}
  >
    Channel domination
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={6}
  >
    Resonate deeper
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={7}
  >
    Ignite your channel
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={8}
  >
    Craft magic scripts
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={9}
  >
    Optimize for YT
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={10}
  >
    Unleash creativity
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={11}
  >
    Forge connections
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={12}
  >
    Elevate storytelling
  </motion.p>,
  <motion.p
    variants={variants}
    initial="leftFade"
    animate="center"
    exit="rightFade"
    transition={{ duration: 0.5 }}
    key={13}
  >
    Conquer algorithms
  </motion.p>,
];

export default function Home() {
  const [[activeId, direction1], setActiveId] = useState([0, 0]);
  const [newStories, setNewStories] = useState([]);

  const [prevIndex, setPrevIndex] = useState({});

  const [[page, direction], setPage] = useState([0, 0]);

  const [text, setText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      setText(textArray[randomIndex]);
    }, 4000); // Change text every 1-4 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

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
      <Navigation />
      <main className={styles.main}>
        <section className={styles.cta}>
          <div>
            <header>
              <AnimatePresence mode="popLayout">{text}</AnimatePresence>
              <br />
              with <span>Vowatex.</span>
            </header>
            <article>
              Maestros of
              spellbinding scriptwriting and cosmic automation, propelling
              brands to unprecedented heights.
            </article>
            <Link href={"/about"}>GET STARTED</Link>
          </div>
          <Image
            src={Unleash}
            alt="unleash Illustration"
            priority
          />
        </section>

        <section className={styles["about"]}>
          <header>What we are</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Youtube Automation</ParallaxText>
          </div>
          <p className={styles["intro"]}>
            At Vowatex, these seven values guide our actions, ensuring that
            every project we undertake is a testament to our commitment to
            excellence in YouTube script writing and automation.
          </p>
          <Values all={3} />
        </section>

        <section className={styles["why"]}>
          <header>Why us?</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Youtube Automation</ParallaxText>
          </div>
          <div className={styles["intro"]}>
            <Image src={Why} alt="why" />
            <p className={styles["intro"]}>
              Voyaging into the captivating realm of YouTube scripting, our
              experts at Vowatex have boldly forged paths where few have
              ventured. <br />
              We stand ready to co-pilot your thrilling journey towards YouTube
              mastery, every exhilarating step of the way.
              <br />
              Data-driven strategies and audience-centric approaches?
              They&apos;re at the core of our mission.
              <br />
            </p>
          </div>
          <article>
            <header>The Process?...</header>
            <div className={styles["strategies"]}>
              <div className={styles["step"]}>
                <Image src={Storytelling} alt="story-telling" />
                <div className={styles["texts"]}>
                  <h2>Vivid Storytelling</h2>
                  <p>
                    Through meticulous crafting, we infuse your scripts with
                    vivid storytelling, elevating your videos to stratospheric
                    heights and captivating your audience like never before.
                  </p>
                </div>
              </div>
              <div className={styles["step"]}>
                <Image src={Engagement} alt="engagement" />
                <div className={styles["texts"]}>
                  <h2>Optimize Engagement</h2>
                  <p>
                    Our skilled team amplifies your voice by optimizing your
                    scripts for maximum engagement, empowering you to connect
                    with your audience on an epic scale.
                  </p>
                </div>
              </div>
              <div className={styles["step"]}>
                <Image src={Automation} alt="automation" />
                <div className={styles["texts"]}>
                  <h2>Wield Automation</h2>
                  <p>
                    Explore the unfamiliar galaxies of YouTube success with
                    Vowatex&apos;s cutting-edge automation solutions,
                    streamlining your journey and propelling your channel
                    towards liftoff.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className={styles["solutions"]}>
          <header>Solutions Offered</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={5}>Solution offered</ParallaxText>
          </div>
          <article>
            {solutions.map((item) => (
              <div key={item.desc} className={styles["solution"]}>
                <span>
                  <Image src={item.img} alt={item.header} />
                </span>
                <h2>{item.header}</h2>
                <p>{item.desc}</p>
              </div>
            ))}
          </article>
        </section>

        <section className={styles["acheivements"]}>
          <header className={styles["bridge"]}>So far...</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Youtube Automation</ParallaxText>
          </div>
          <div className={styles["stats"]}>
            <div className={styles["stat"]}>
              <Image src={Crowd} alt="client" />
              <span className={styles["figures"]}>15k+</span>
              <span className={styles["subject"]}>CLIENTS</span>
              <span className={styles["action"]}>Satisfied</span>
            </div>
            <div className={styles["stat"]}>
              <Image src={Project} alt="projects" />
              <span className={styles["figures"]}>60k+</span>
              <span className={styles["subject"]}>PROJECTS</span>
              <span className={styles["action"]}>Completed</span>
            </div>
            <div className={styles["stat"]}>
              <Image src={Countries} alt="countries" />
              <span className={styles["figures"]}>51</span>
              <span className={styles["subject"]}>COUNTRIES</span>
              <span className={styles["action"]}>Reached</span>
            </div>
          </div>
        </section>

        <section className={styles["process"]}>
          <header>Our Content Voyage</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Youtube Automation</ParallaxText>
          </div>
          <div className={styles["steps"]}>
            {steps.map((step) => (
              <div key={step.id} className={styles["step"]}>
                <span>
                  <p>{step.id}</p>
                </span>
                <article>
                  <h2>{step.header}</h2>
                  <p>{step.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className={styles["stories"]}>
          <header>Reviews</header>
          <div className={styles["scroll-effect"]}>
            <ParallaxText baseVelocity={-5}>Youtube Automation</ParallaxText>
          </div>
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

        <ContactPip />
      </main>
      <Footer />
    </>
  );
}
