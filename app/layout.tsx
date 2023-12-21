import type { Metadata } from 'next';
import '@fontsource-variable/inter';

import './globals.css';

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
      <body className={`min-h-screen`}>{children}</body>
    </html>
  );
}
