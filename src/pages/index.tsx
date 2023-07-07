import Layout from "~/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout>
        <Image
          loading="eager"
          priority={true}
          quality={70}
          src="/linus.jpg"
          width="450"
          height="450"
          alt="me"
          style={{ objectFit: "contain", marginBottom: "20px" }}
        />
      </Layout>
    </>
  );
}
