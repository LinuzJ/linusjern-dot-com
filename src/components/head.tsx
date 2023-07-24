import Head from "next/head"
import { site } from "~/pages/_app"

export default function MainHead() {
  return (
    <Head>
      <meta name='description' content="Hello there! I'm Linus Jern." />
      <meta
        property='og:image'
        content={"https://linusjern.com/images/me.jpg"}
      />
      <meta name='og:title' content={site} />
      <meta name='twitter:card' content='summary' />
    </Head>
  )
}
