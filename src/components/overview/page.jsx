import Image from 'next/image';
import styles from './page.module.css';

const Overview = ({header, tagline}) => {
  const randomIndex = Math.floor(Math.random() * 4) + 1;

  return (
    <section
      className={styles["overview"]}
    >
      <Image
        src={`/assets/images/gradient-${randomIndex}.webp`}
        alt="Gradient Background"
        fill
        style={{ objectFit: "cover" }}
      />
      <header>{header}</header>
      <p>{tagline}</p>
    </section>
  );
}

export default Overview;