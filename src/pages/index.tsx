import Layout from "~/components/layout";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import type { GetStaticProps } from "next";
import { promisify } from "util";
import fs from "fs";
import styles from "../styles/layout.module.css";
import ExternalLink from "~/components/link";

interface Props {
  intro: MDXRemoteSerializeResult;
}
const componentsForMdx = { a: ExternalLink };

export default function Home({ intro }: Props) {
  return (
    <Layout>
      <Image
        loading="eager"
        priority={true}
        quality={70}
        src="/linus.jpg"
        width="480"
        height="428"
        alt="linus"
        style={{ objectFit: "contain", marginBottom: "20px" }}
      />
      <div className={styles.introRow}>
        <MDXRemote {...intro} components={componentsForMdx} />
      </div>
    </Layout>
  );
}
export const getStaticProps: GetStaticProps<{
  intro: MDXRemoteSerializeResult;
}> = async () => {
  const rawIntro = await promisify(fs.readFile)(
    "./src//writing/introduction.mdx"
  );
  const intro = await serialize(rawIntro.toString());

  return {
    props: {
      intro,
    },
  };
};
