import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import H2 from '@/components/H2';
import P from '@/components/P';

import '../globals.css';

import { wrapperId } from './consts';
import ContentWrapper from '@/components/ContentWrapper';

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
    <ContentWrapper>
      <div className="-mt-5">
        <header className="flex flex-col items-center">
          <H2>Smederevo Weather in 2022</H2>
        </header>
        <main id={wrapperId} className="flex justify-center">
          {children}
        </main>
      </div>
    </ContentWrapper>
  );
}
