import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import H2 from '@/components/H2';
import ContentWrapper from '@/components/ContentWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview',
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
      <header className="flex justify-center m-12">
        <H2>2022 Daily Weather Overview in Smederevo</H2>
      </header>
      <main className="flex justify-center">{children}</main>
    </ContentWrapper>
  );
}
