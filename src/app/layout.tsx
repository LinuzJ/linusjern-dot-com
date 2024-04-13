import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_TRACKING_ID } from '@/lib/gtag';
import NavBar from '@/components/NavBar';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='m-0 h-screen p-0'>
      <meta
        property='og:image'
        content={'https://linusjern.com/images/linus_jern.jpg'}
      />
      <meta name='og:title' content='Linus Jern' />
      <meta name='twitter:card' content='summary' />
      <meta name='apple-mobile-web-app-title' content='Linus Jern' />
      <meta name='application-name' content='Linus Jern' />
      <meta name='viewport' content='width=device-width' />

      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='me' href='https://github.com/LinuzJ' />
      <link rel='me' href='https://twitter.com/JernLinus' />
      <link rel='me' href='https://www.linkedin.com/in/linus-jern/' />
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
      <body className='system-ui m-0 box-border flex min-h-full min-w-full flex-col items-center justify-start overflow-scroll bg-yellow-bg p-0 pb-10 font-sans'>
        <NavBar />
        <div>{children}</div>
        <SpeedInsights />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: `Linus Jern`,
  generator: 'Linus Jern',
  applicationName: `Linus Jern`,
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
    title: `Linus Jern`,
    description:
      "Hello there! I'm Linus Jern. I like complex problems, smart people and cool products.",
    creator: '@JernLinus',
  },
  openGraph: {
    title: `Linus Jern`,
    description:
      "Hello there! I'm Linus Jern. I like complex problems, smart people and cool products.",
    url: `https://www.linusjern.com`,
    siteName: 'Linus Jern',
    images: [
      {
        url: 'https://linusjern.com/images/linus_jern.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
};
