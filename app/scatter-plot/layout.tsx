import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import ContentWrapper from '@/components/ContentWrapper';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview | Scatter Plot',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ContentWrapper>
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </ContentWrapper>
  );
}
