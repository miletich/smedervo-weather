import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview',
  description:
    'Cool alternative to the proverbial table sorting & filtering task',
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <header {...stylex.props(styles.header)}>
        <H2 styleX={styles.heading}>
          2022 Daily Weather Overview in Smederevo
        </H2>
      </header>
      <main {...stylex.props(styles.main)}>{children}</main>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    textAlign: 'center',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
  heading: {
    marginTop: '5rem',
    marginBottom: '3.5rem',
  },
});
