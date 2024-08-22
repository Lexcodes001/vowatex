import styles from "./page.module.css";
import AdminTopNav from '@/components/admin/navigation/topNav/page';
import AdminSideNav from "@/components/admin/navigation/sideNav/page";

export default function Layout({ children }) {
  return (
    <>
      <AdminSideNav />
      <div className={styles["children"]}>
        <AdminTopNav />
        <div className={styles["body"]}>{children}</div></div>
    </>
  );
}
