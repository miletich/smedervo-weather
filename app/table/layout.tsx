import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import H2 from '@/components/H2';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smederevo Weather Scatter Plot',
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
        <H2>2022 Daily Weather Overview in Smederevo</H2>
      </header>
      <main>{children}</main>
    </>
  );
}
