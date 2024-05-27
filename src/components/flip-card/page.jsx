import Image from 'next/image';
import styles from './page.module.css';

const Card = ({icon, header, desc}) => {
  return (
    <>
      <div className={styles["flip-container"]}>
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
      </div>
    </>
  );
}

export default Card;