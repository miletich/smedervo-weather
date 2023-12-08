import type { PropsWithChildren } from 'react';

import H2 from '@/components/H2';

export default async function Home({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex flex-col items-center">
        <H2>Smederevo 2022 weather overview</H2>
      </header>
      <main>{children}</main>
    </>
  );
}
