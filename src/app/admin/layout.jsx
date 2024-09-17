import styles from "./page.module.css";
import AdminTopNav from "@/components/admin/navigation/topNav/page";
import AdminSideNav from "@/components/admin/navigation/sideNav/page";

export default function Layout({ children }) {
  return (
    <div className={styles["page"]}>
      <AdminSideNav />
      <div className={styles["body"]}>
        <AdminTopNav />
        <div className={styles["children"]}>{children}</div>
      </div>
    </div>
  );
}
