import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Title from '@/components/Title';

const inter = Inter({ subsets: ['latin'] });

const site = 'Linus Jern';

export const metadata: Metadata = {
  title: `Linus Jern Personal Page`,
  generator: 'Linus Jern',
  applicationName: `Linus Jern Personal Page`,
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
    title: `Linus Jern Personal Page`,
    description:
      "Hello there! I'm Linus Jern. I like complex problems, smart people and cool products.",
    creator: '@JernLinus',
  },
  openGraph: {
    title: `Linus Jern Personal Page`,
    description:
      "Hello there! I'm Linus Jern. I like complex problems, smart people and cool products.",
    url: `https://www.linusjern.com`,
    siteName: 'Linus Jern Personal Page',
    images: [
      {
        url: 'https://linusjern.com/images/linus_jern.jpg',
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: 'public/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta
        property='og:image'
        content={'https://linusjern.com/images/linus_jern.jpg'}
      />
      <meta name='og:title' content={site} />
      <meta name='twitter:card' content='summary' />
      <meta name='apple-mobile-web-app-title' content={site} />
      <meta name='application-name' content={site} />
      <meta name='viewport' content='width=device-width' />


      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='me' href='https://github.com/LinuzJ' />
      <link rel='me' href='https://twitter.com/JernLinus' />
      <link rel='me' href='https://www.linkedin.com/in/linus-jern/' />
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
      <body className='system-ui min-w-screen m-0 flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-white-bg to-yellow-bg p-0 font-sans'>
        <Title />
        <div>{children}</div>
      </body>
    </html>
  );
}

export { site };
