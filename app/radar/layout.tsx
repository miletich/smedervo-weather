import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';
import P from '@/components/P';
import ContentWrapper from '@/components/ContentWrapper';
import { generic } from '@/styles/generic';

import { wrapperId } from './consts';

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
      <header {...stylex.props(generic.centerText)}>
        <H2>Smederevo Weather in 2022</H2>
      </header>
      <main id={wrapperId} {...stylex.props(generic.centerXY)}>
        {children}
      </main>
    </ContentWrapper>
  );
}
