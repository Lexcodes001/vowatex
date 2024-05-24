import styles from './page.module.css';

const Overview = ({header, tagline}) => {
  return (
    <section className={styles["overview"]}>
      <header>{header}</header>
      <p>
        {tagline}
      </p>
    </section>
  );
}

export default Overview;