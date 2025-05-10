import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Dharani | Full-Stack Developer & Designer',
  description: 'Portfolio of Dharani — a freelance full-stack web developer and designer who creates intuitive, high-performance web experiences.',
  keywords: ['Full-stack developer', 'Web designer', 'Freelance developer', 'Dharani', 'Next.js', 'Portfolio', 'Web development'],
  authors: [{ name: 'Dharani' }],
  creator: 'Dharani',
  metadataBase: new URL('https://dharani.vercel.app'),
  openGraph: {
    title: 'Dharani | Full-Stack Developer & Designer',
    description: 'Crafting beautiful, intuitive websites and web applications with care and code.',
    url: 'https://dharani.vercel.app',
    siteName: 'Dharani Portfolio',
    images: [
      {
        url: 'https://dharani.vercel.app/og-image.png', 
        width: 1200,
        height: 630,
        alt: 'Dharani Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dharani | Full-Stack Developer & Designer',
    description: 'Crafting beautiful, intuitive websites and web applications with care and code.',
    images: ['https://dharani.vercel.app/og-image.png'],
    creator: '@yourhandle',
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={`${inter.className} bg-[#03040A] text-[#E6E6F1] overflow-x-hidden`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
