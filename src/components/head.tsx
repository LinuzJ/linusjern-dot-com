import Head from "next/head"

const structData = {
  "@context": "https://linusjern.com",
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
      <script
        key='structured-1'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
      />
    </Head>
  )
}
