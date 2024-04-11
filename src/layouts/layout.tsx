import Title from '@/components/Title';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <main className='system-ui min-w-screen from-white-bg to-yellow-bg m-0 flex min-h-screen flex-col items-center justify-start bg-gradient-to-br p-0 font-sans'>
      <Title />
      <div>{children}</div>
    </main>
  );
}
