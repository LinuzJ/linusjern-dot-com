import Link from 'next/link';

export interface PostCardProps {
  title: string;
  description?: string;
  date: string;
  id: string;
}

export default function PostCard({
  id,
  title,
  description,
  date,
}: PostCardProps) {
  return (
    <div className='mt-8 flex flex-col hover:text-link-color'>
      <Link href={`/writing/${id}`}>
        <h1 className='text-2xl font-extralight text-link-color'>{title}</h1>
        <p className='font-light text-text-color'>{description}</p>
        <p className='font-light text-text-color'>{date}</p>
      </Link>
    </div>
  );
}
