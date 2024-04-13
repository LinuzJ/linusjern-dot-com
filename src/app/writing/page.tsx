import PostCard from '@/components/PostCard';
import { getAllPostData } from '@/lib/posts';

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <div>
        {posts.map((post) => {
          if (post.id !== 'introduction') {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                date={post.date}
                id={post.id}
              />
            );
          }
        })}
      </div>
    </>
  );
}

async function getAllPosts() {
  const posts = await getAllPostData();

  return posts;
}
