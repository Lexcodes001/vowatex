import styles from "./page.module.css";
import Hamburger from "hamburger-react";
import AnimatedText from "@/components/framer/text-animation";
import useScreenMode from "@/hooks/useScreenMode";

export default function Layout({ children }) {
  const screenMode = useScreenMode();
  alert(screenMode);
  
}
