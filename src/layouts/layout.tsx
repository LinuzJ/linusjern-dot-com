import Title from '@/components/Title';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <main className='min-w-screen flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-white to-rose-200'>
      <Title />
      <div className='mb-8 flex w-full flex-col items-center justify-center sm:mb-16 md:mb-20 lg:max-w-3xl xl:max-w-4xl'>
        {children}
      </div>
    </main>
  );
}
