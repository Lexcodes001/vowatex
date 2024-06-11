import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { Variants } from "@/lib/variants";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Overview = ({ img, header, tagline, routes }) => {
  const randomIndex = Math.floor(Math.random() * 4) + 1;
  console.log(routes);

  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <section className={`${styles["overview"]} ${img && styles.custom}`}>
      {img ? (
        <Image
          src={img}
          alt="Image Background"
          fill
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Image
          src={`/assets/images/gradient-${randomIndex}.webp`}
          alt="Gradient Background"
          fill
          style={{ objectFit: "cover" }}
        />
      )}

      {routes && (
        <div className={styles["history"]}>
          <span onClick={handleBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width={16}
              height={16}
              viewBox="0 0 512 640"
              fill="var(--text-2)"
              style={{ enableBackground: "new 0 0 512 512", rotate: "-90deg" }}
            >
              <path d="M335.052,171.058c-21.116-21.115-49.19-32.744-79.052-32.744c-29.862,0-57.937,11.63-79.052,32.745L72.003,276.004  c-11.18,11.181-17.337,26.045-17.337,41.855c0,15.812,6.157,30.676,17.337,41.854c23.079,23.081,60.632,23.081,83.712,0.002  L256,259.431l100.285,100.284c11.18,11.18,26.045,17.337,41.856,17.337c15.811-0.001,30.676-6.158,41.855-17.338  c11.18-11.18,17.337-26.045,17.337-41.856c0-15.812-6.158-30.676-17.337-41.855L335.052,171.058z" />
            </svg>
          </span>
          <span className={styles["paths"]}>
            {routes.map((route) => (
              <Link href={route.link} key={route.link}>{route.preview}</Link>
            ))}
          </span>
        </div>
      )}

      <motion.header
        variants={Variants}
        initial="topFade"
        whileInView="center"
        transition={{ duration: 1, easings: "easeOut" }}
      >
        {header}
      </motion.header>
      <motion.p
        variants={Variants}
        initial="bottomFade"
        whileInView="center"
        transition={{ duration: 1, easings: "easeOut" }}
      >
        {tagline}
      </motion.p>
    </section>
  );
};

export default Overview;
