import { getAllPostIds, getPostDataFromFile } from '@/lib/posts';
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

async function getPostData(id: string) {
  const data = await getPostDataFromFile(id);

  return data.source;
}

// App router version to statically render all possible paths
export async function generateStaticParams() {
  const postsIds = await getAllPostIds();

  return postsIds.map((id) => ({ id }));
}

// Render metadata
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const { title, description } = await getPostDataFromFile(id);
  return {
    title: `Linus Jern Blog Post: ${id}`,
    generator: 'Linus Jern',
    applicationName: `Linus Jern Personal Page`,
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
      title: `Linus Jern Blog Post: ${id}`,
      description,
      creator: '@JernLinus',
    },
    openGraph: {
      title: `Linus Jern Blog Post: ${id}`,
      description,
      url: `https://www.linusjern.com/writing/${id}`,
      siteName: 'Linus Jern Personal Page',
      images: [
        {
          url: 'https://linusjern.com/images/linus_jern.jpg',
          width: 800,
          height: 600,
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-icon.png',
    },
  };
}
