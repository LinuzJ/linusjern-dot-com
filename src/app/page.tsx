import Image from 'next/image';
import React from 'react';
import { getPostDataFromFile } from '@/lib/posts';
import { CustomMDX } from '@/components/mdx-remote';

export default async function Home() {
  const intro = await getPostData('introduction');
  return (
    <>
      <div className='mb-4 flex w-full flex-col items-center justify-center'>
        <Image
          loading='eager'
          priority={true}
          quality={70}
          className='mb-5 h-[300px] w-[300px] object-contain md:h-[400px] md:w-[400px]'
          src='/images/linus_jern.jpg'
          width='480'
          height='428'
          alt='Linus Jern - The Author'
        />
        <div className='items-left flex h-[400px] w-4/5 flex-col justify-between font-light leading-none text-text-color sm:w-3/5 md:w-1/2'>
          <CustomMDX source={intro} />
        </div>
      </div>
    </>
  );
}

async function getPostData(id: string) {
  const data = await getPostDataFromFile(id);

  return data.source;
}
