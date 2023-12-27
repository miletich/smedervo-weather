import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import * as stylex from '@stylexjs/stylex';

import PageTransition from '@/components/PageTransition';
import ContentWrapper from '@/components/ContentWrapper';
import { generic } from '@/styles/generic';

import { wrapperId } from './consts';

export const metadata: Metadata = {
  title: 'Smederevo Weather Radar | Radar',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ContentWrapper>
      <PageTransition>
        <main id={wrapperId} {...stylex.props(generic.centerXY)}>
          {children}
        </main>
      </PageTransition>
    </ContentWrapper>
  );
}
