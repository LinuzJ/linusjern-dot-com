import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Script from "next/script";
import "~/styles/globals.css";
import { GA_TRACKING_ID } from "~/misc/gtag";

export const site = "Linus Jern";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Head>
        <title>Linus Jern</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content={site} />
        <meta name="application-name" content={site} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
