import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview | Table',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main {...stylex.props(styles.main)}>{children}</main>;
}

const styles = stylex.create({
  main: {
    margin: '6rem auto 0 auto',
  },
});
