import type { Metadata } from 'next';
import '../globals.css';
import H2 from '@/components/H2';

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
    <div className="flex flex-col h-full">
      <header className="flex justify-center">
        <H2 className="mb-14 mt-20">
          2022 Daily Weather Overview in Smederevo
        </H2>
      </header>
      <main className="flex justify-center flex-grow-1">{children}</main>
    </div>
  );
}
