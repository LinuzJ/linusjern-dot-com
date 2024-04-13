import Link from 'next/link';
import Title from './Title';

export default function NavBar() {
  return (
    <div className='mb-12 mt-5 flex w-full flex-row content-center items-center justify-between sm:mt-0 sm:mt-7'>
      <div className='flex flex-col justify-center sm:flex-row'>
        <Link
          className='text-nav-bar-links mb-2 ml-5 text-xl font-light leading-none tracking-tight hover:underline sm:mb-0'
          href='/'
        >
          Home
        </Link>
        <Link
          className='text-nav-bar-links  ml-5 text-xl font-light leading-none tracking-tight hover:underline'
          href='/writing'
        >
          Writing
        </Link>
      </div>
      <div className='sm:absolute sm:left-1/2 sm:translate-x-[-50%]'>
        <Title />
      </div>
    </div>
  );
}
