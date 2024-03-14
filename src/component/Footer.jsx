import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.list}>
        Total compeleted Todo{completedTodos > 1 ? "s" : ""} : {completedTodos}
      </span>
      <span className={styles.list}>
        Total Todo{totalTodos > 1 ? "s" : ""} : {totalTodos}
      </span>
    </div>
  );
}
