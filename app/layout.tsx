import { type PropsWithChildren } from 'react';
import { type Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';
import '@fontsource-variable/inter';

import { MainMenu, MainMenuItem } from '@/components/MainMenu';
import { colorScheme } from '../styles/tokens.stylex';

import Header from './header';
import './reset.css';

export const metadata: Metadata = {
  title: 'Smederevo Weather in 2022',
  description: 'Yearly overview of weather in Smederevo, Serbia',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body {...stylex.props(styles.body)}>
        <Header />
        {children}
      </body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    fontFamily: 'Inter Variable',
    minHeight: '100vh',
    color: colorScheme.text,
    backgroundImage: colorScheme.bodyBackground,
    display: 'flex',
    flexDirection: 'column',
  },
});
