import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Linus Jern</title>
        <meta name="description" content="Linus Jern Personal website" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
