import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GA_TRACKING_ID } from '@/lib/gtag';

const inter = Inter({ subsets: ['latin'] });

const site = 'Linus Jern';

export const metadata: Metadata = {
  title: 'Linus Jern',
  description:
    "Hello there! I'm Linus Jern. I like complex problems, smart people and cool products.",
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

      <link rel='icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link rel='me' href='https://github.com/LinuzJ' />
      <link rel='me' href='https://twitter.com/JernLinus' />
      <link rel='me' href='https://www.linkedin.com/in/linus-jern/' />
      <GoogleAnalytics gaId={GA_TRACKING_ID} />
      <body>{children}</body>
    </html>
  );
}

export { site };
