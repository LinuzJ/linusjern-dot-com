import { getAllPostIds, getPostDataFromFile } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CustomMDX } from '@/components/mdx-remote';

export default async function WritingPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPostData(id);
  return (
    <main>
      <article>
        <CustomMDX source={post} />
      </article>
    </main>
  );
}

export async function getPostData(id: string) {
  const data = await getPostDataFromFile(id);

  return data.source;
}

// This function can statically allow nextjs to find all the posts that you
// have made, and statically generate them
export async function generateStaticParams() {
  const postsIds = await getAllPostIds();

  return postsIds.map((id) => ({ id }));
}

// Set the title of the page to be the post title, note that we no longer use
// e.g. next/head in app dir, and this can be async just like the server
// component
// export async function generateMetadata({
//   params: { id },
// }: {
//   params: { id: string };
// }) {
//   const { title } = await getPostById(id);
//   return {
//     title,
//   };
// }
