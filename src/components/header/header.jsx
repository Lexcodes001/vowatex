import { motion, spring } from "framer-motion";
import styles from './page.module.css';
import { Variants } from "@/lib/variants";

const Header = ({children, className, fontSize}) => {
  return (
    <motion.header
    variants={Variants}
    initial="rightFade"
    whileInView="center"
    transition={{duration: 1.2, type: 'spring'}}
    className={`${className} ${styles.header}`}
    >{children}</motion.header>
  )
}

export default Header;