import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import MainHeader from './ui/MainHeader';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS Community Management Software',
  description: 'Manage your community with NextJS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
