import styles from "../styles/layout.module.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Linus Jern</h1>
      {children}
    </main>
  );
}
