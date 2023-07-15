import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import Script from "next/script"
import "~/styles/globals.css"
import * as gtag from "~/misc/gtag"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
      <Head>
        <title>Linus Jern</title>
        <meta name='description' content='Linus Jern Personal Website' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
