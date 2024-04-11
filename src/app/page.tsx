import MainHead from '@/head';
import Layout from '@/layouts/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <MainHead />
      <Layout>
        <div className='container mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
          {/* <Image
            loading='eager'
            priority={true}
            quality={70}
            className='imageContainer'
            src='/linus_jern.jpg'
            width='480'
            height='428'
            alt='Linus Jern'
          /> */}
          asd
          {/* <div className='introRow text-center md:text-left'>
            <MDXRemote {...intro} components={componentsForMdx} />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
