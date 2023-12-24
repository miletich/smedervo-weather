import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';
import P from '@/components/P';
import ContentWrapper from '@/components/ContentWrapper';
import { generic } from '@/styles/generic';

export const metadata: Metadata = {
  title: 'Smederevo Weather Scatter Plot',
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
        <H2>Daily Temperature Ranges</H2>
        <P>Daily minimum and maximum temperatures in Smederevo in 2022</P>
      </header>
      <main>{children}</main>
    </ContentWrapper>
  );
}
