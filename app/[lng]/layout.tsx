import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import '@/app/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: 'NextJS Community Management Software',
  description: 'Manage your community with NextJS',
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <NavBar lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
