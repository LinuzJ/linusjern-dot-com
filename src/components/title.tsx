import styles from "../styles/title.module.css";

export default function Title() {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Linus Jern</h1>
      <h2 className={styles.titleAdditional}>
        Software Engineer/Computer Science student
      </h2>
    </div>
  );
}
