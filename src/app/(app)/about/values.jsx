import styles from "./page.module.css";
import EngagementIcon from "@/images/icons-engagement.png";
import AutomateIcon from "@/images/icons-automate.png";
import ContentIcon from "@/images/icons-content.png";
import ExperienceIcon from "@/images/icons-experience.png";
import ExpertIcon from "@/images/icons-expert.png";
import StoryIcon from "@/images/icons-story.png";
import TrendIcon from "@/images/icons-trend.png";
import ForwardIcon from "@/images/icons-forward-button.png";
import Image from "next/image";
import Link from "next/link";

const valuesObj = [
  {
    name: "Visionary Storytelling",
    icon: StoryIcon,
    desc: "We craft visionary scripts that captivate viewers and bring your brand's narrative to life through compelling storytelling techniques.",
  },
  {
    name: "Optimized Automation",
    icon: AutomateIcon,
    desc: "Our cutting-edge automation solutions optimize the content creation process, ensuring efficient and streamlined workflow management.",
  },
  {
    name: "Well-Researched Content",
    icon: ContentIcon,
    desc: "Every script we produce is backed by thorough research, ensuring accurate and engaging content tailored to your target audience.",
  },
  {
    name: "Audience Engagement",
    icon: EngagementIcon,
    desc: "We understand the importance of audience engagement and craft scripts that resonate with your viewers, fostering lasting connections.",
  },
  {
    name: "Trendsetting Innovation",
    icon: TrendIcon,
    desc: "Our team stays ahead of the curve, embracing the latest trends and innovations in YouTube content creation and automation.",
  },
  {
    name: "Exceptional Expertise",
    icon: ExpertIcon,
    desc: "Our specialized writers possess exceptional expertise in their respective fields, guaranteeing high-quality, authoritative content.",
  },
  {
    name: "Xtraordinary Experiences",
    icon: ExperienceIcon,
    desc: "From concept to execution, we strive to deliver extraordinary experiences that exceed your expectations and elevate your YouTube presence.",
  },
];

const Values = ({all}) => {
    const returnedValues = typeof all !== 'number' ? valuesObj : valuesObj.slice(0, all);

  return (
    <div className={styles["values"]}>
      {returnedValues.map((value) => (
        <div className={styles["flip-container"]} key={value.desc}>
          <div className={styles["flipper"]}>
            <div className={styles["front"]}>
              <Image src={value.icon} alt="icon" />
              <header>{value.name}</header>
            </div>
            <div className={styles["back"]}>
              <Image src={value.icon} alt="icon" />
              <p>{value.desc}</p>
            </div>
          </div>
        </div>
      ))}
      {typeof all === 'number' && <Link href={'/about'} className={styles["see-more"]}>
        <Image src={ForwardIcon} alt="icon" />
        <p>See more</p>
      </Link>}
    </div>
  );
};

export default Values;
