import Link from 'next/link';

export default function Title() {
  return (
    <div className='flex flex-col items-center justify-end sm:mt-5 sm:justify-normal'>
      <Link href={'/'}>
        <h1 className='mb-1 mr-5 text-3xl font-light leading-none tracking-tight text-title-big sm:mr-0 sm:text-5xl sm:font-extralight'>
          Linus Jern
        </h1>
      </Link>
      <h2 className='mb-1 hidden text-xs font-light leading-none tracking-tight text-title-big sm:block sm:w-full sm:max-w-full sm:text-base sm:font-extralight'>
        Software Engineer/Computer Science student
      </h2>
    </div>
  );
}
