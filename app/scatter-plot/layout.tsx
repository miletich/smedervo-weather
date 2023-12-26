import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import ContentWrapper from '@/components/ContentWrapper';

export const metadata: Metadata = {
  title: 'Smederevo Weather Overview | Scatter Plot',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ContentWrapper>
      <main>{children}</main>
    </ContentWrapper>
  );
}
