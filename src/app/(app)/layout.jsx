import Navigation from "@/components/navigation/page";
import Footer from "@/components/footer/page";
import styles from "@/app/page.module.css";

export const metadata = {
  title: "Vowatex",
  description: "To serve you",
};

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className={styles["children"]}>{children}</div>
      <Footer />
    </>
  );
}
