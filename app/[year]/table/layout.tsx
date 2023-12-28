import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview | Table',
};

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main {...stylex.props(styles.main)}>
      <PageTransition>{children}</PageTransition>
    </main>
  );
}

const styles = stylex.create({
  main: {
    margin: '6rem auto 0 auto',
  },
});
