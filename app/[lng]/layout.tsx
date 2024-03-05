import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';
import MainHeader from './ui/MainHeader';
import '@/app/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
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
        <MainHeader lng={lng} />
        {children}
      </body>
    </html>
  );
}
