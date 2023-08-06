import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "~/misc/gtag"

export const site = "Linus Jern"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <meta
            name='description'
            content="Hello there! I'm Linus. I like complex problems, smart people and cool products."
          />
          <meta
            property='og:image'
            content={"https://linusjern.com/images/me.jpg"}
          />
          <meta name='og:title' content={site} />
          <meta name='twitter:card' content='summary' />
          <meta name='apple-mobile-web-app-title' content={site} />
          <meta name='application-name' content={site} />
          <meta name='viewport' content='width=device-width' />

          <link rel='icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link rel='me' href='https://github.com/LinuzJ' />
          <link rel='me' href='https://twitter.com/JernLinus' />
          <link rel='me' href='https://www.linkedin.com/in/linus-jern/' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
