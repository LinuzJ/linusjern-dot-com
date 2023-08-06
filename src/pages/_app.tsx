import { type AppType } from "next/dist/shared/lib/utils"
import Head from "next/head"
import Script from "next/script"
import "~/styles/globals.css"
import { GA_TRACKING_ID } from "~/misc/gtag"

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Head>
        <title>Linus Jern</title>
        <meta name='viewport' content='width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
