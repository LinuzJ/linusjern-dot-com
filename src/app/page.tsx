import MainHead from '@/head';
import Layout from '@/layouts/layout';
import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <MainHead />
      <Layout>
        <div className='mb-4 flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md'>
          <Image
            loading='eager'
            priority={true}
            quality={70}
            className='mb-5 h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]'
            src='/linus_jern.jpg'
            width='480'
            height='428'
            alt='Linus Jern'
          />
          <div className='flow-col items-left m-20 flex w-4/5 justify-center'>
            abcabc
          </div>
        </div>
      </Layout>
    </>
  );
}
