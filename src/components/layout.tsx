import styles from "../styles/layout.module.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Linus Jern</h1>
      {children}
      <div className={styles.container}>
        <div className={styles.introRow}>
          Hello there, I'm Linus and I like building stuff. Does not matter if
          it's software or fitness.
        </div>
      </div>
    </div>
  );
}
