import Head from "next/head"
import { site } from "~/pages/_app"

const structData = {
  "@context": "https://linusjern.com",
  "@type": "Article",
  headline: "Linus Jern",
  description: "Hello there! I'm Linus Jern.",
  author: [
    {
      "@type": "Person",
      name: "Linus Jern",
    },
  ],
}

export default function MainHead() {
  return (
    <Head>
      <meta
        property='og:image'
        content={"https://linusjern.com/images/me.jpg"}
      />
      <meta name='og:title' content={site} />
      <meta name='twitter:card' content='summary' />
      <script
        key='structured-1'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
      />
    </Head>
  )
}
