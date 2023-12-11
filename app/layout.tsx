import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import H2 from '@/components/H2';
import P from '@/components/P';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smederevo Weather in 2022',
  description:
    'Cool alternative to the proverbial table sorting & filtering task',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="flex flex-col items-center justify-center h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
