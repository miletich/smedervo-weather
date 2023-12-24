import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';
import '@fontsource-variable/inter';

import { colorScheme } from '../styles/tokens.stylex';

import './reset.css';

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
      <body {...stylex.props(styles.body)}>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    fontFamily: 'Inter Variable',
    minHeight: '100vh',
    color: colorScheme.text,
    backgroundImage: colorScheme.bodyBackground,
  },
});
