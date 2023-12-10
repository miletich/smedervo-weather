import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import H2 from '@/components/H2';
import P from '@/components/P';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smederevo Weather Radar',
  description:
    'Cool alternative to the proverbial table sorting & filtering task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex flex-col items-center">
        <H2>Smederevo Weather in 2022</H2>
      </header>
      <main className="flex justify-center">{children}</main>
    </>
  );
}
