import styles from "./index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linus Jern</title>
        <meta name="description" content="Linus Jern Personal website" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Linus Jern</h1>
          <div className={styles.cardRow}>Cool pictures and stuff</div>
        </div>
      </main>
    </>
  );
}
