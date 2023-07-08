import styles from "../styles/layout.module.css";
import Title from "./title";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <main className={styles.main}>
      <Title />
      {children}
    </main>
  );
}
