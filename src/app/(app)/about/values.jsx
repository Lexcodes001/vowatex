import styles from "./page.module.css";
import Card from '@/components/flip-card/page';
import EngagementIcon from "@/images/icons-engagement.webp";
import AutomateIcon from "@/images/icons-automate.webp";
import ContentIcon from "@/images/icons-content.webp";
import ExperienceIcon from "@/images/icons-experience.webp";
import ExpertIcon from "@/images/icons-expert.webp";
import StoryIcon from "@/images/icons-story.webp";
import TrendIcon from "@/images/icons-trend.webp";
import ForwardIcon from "@/images/icons-forward-button.webp";
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
      {returnedValues.map((value, index) => (
        <Card key={index} icon={value.icon} header={value.name} desc={value.desc}/>
      ))}
      {typeof all === 'number' && <Link href={'/about'} className={styles["see-more"]}>
        <Image src={ForwardIcon} alt="icon" />
        <p>See more</p>
      </Link>}
    </div>
  );
};

export default Values;
