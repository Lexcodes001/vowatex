import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.css';
import { Variants } from '@/lib/variants';

const Card = ({icon, header, desc}) => {
  return (
    <>
      <motion.div
        variants={Variants}
        initial="scaleFade"
        whileInView="center"
        transition={{ duration: .5, easings: "easeOut" }}
        className={styles["flip-container"]}
      >
        <div className={styles["flipper"]}>
          <div className={styles["front"]}>
            <Image src={icon} alt="icon" />
            <header>{header}</header>
          </div>
          <div className={styles["back"]}>
            <Image src={icon} alt="icon" />
            <p>{desc}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Card;