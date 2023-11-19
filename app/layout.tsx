import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import H2 from '@/components/H2';
import P from '@/components/P';

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-center h-screen">
          <header className="flex flex-col items-center">
            <H2>Daily Temperature Ranges</H2>
            <P className="text-center">
              Daily minimum and maximum temperatures in Smederevo in 2022
            </P>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
