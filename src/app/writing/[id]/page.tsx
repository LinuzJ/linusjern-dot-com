import { getAllPostIds, getPostDataFromFile } from '@/lib/posts';
import { CustomMDX } from '@/components/mdx-remote';

type WritingPageParams = { id: string };

export default async function WritingPage({
  params,
}: {
  params: Promise<WritingPageParams>;
}) {
  const { id } = await params;
  const post = await getPostData(id);
  return (
    <main>
      <article className='mt-14 flex flex-col items-center pl-5 pr-5 font-light leading-none text-text-color sm:max-w-[60rem]'>
        <CustomMDX source={post.source} />
        <div className='mt-10'>Published {post.date}</div>
      </article>
    </main>
  );
}

async function getPostData(id: string) {
  const data = await getPostDataFromFile(id);

  return data;
}

// App router version to statically render all possible paths
export async function generateStaticParams() {
  const postsIds = await getAllPostIds();

  return postsIds.map((id) => ({ id }));
}

// Render metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<WritingPageParams>;
}) {
  const { id } = await params;
  const { title, description } = await getPostDataFromFile(id);
  return {
    title: `Linus Jern - ${id}`,
    generator: 'Linus Jern',
    applicationName: `Linus Jern`,
    keywords: [
      'Next.js',
      'React',
      'TypeScript',
      'Linus Jern',
      'Linus',
      'Jern',
      'Blog',
    ],
    authors: [{ name: 'Linus Jern', url: 'https://www.linusjern.com' }],
    creator: 'Linus Jern',
    publisher: 'Linus Jern',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    twitter: {
      card: 'summary',
      title: `Linus Jern - ${id}`,
      description,
      creator: '@JernLinus',
    },
    openGraph: {
      title: `Linus Jern - ${id}`,
      description,
      url: `https://www.linusjern.com/writing/${id}`,
      siteName: 'Linus Jern',
      images: [
        {
          url: 'https://linusjern.com/images/linus_jern.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
