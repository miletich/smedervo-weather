import type { PropsWithChildren } from 'react';

import H2 from '@/components/H2';
import P from '@/components/P';
import MainMenuItem, { MainMenu } from '@/components/MainMenu';

import ScatterPlotIllustration from './scatter-plot/Illustration';
import RadarIllustration from './radar/Illustration.tsx';
import ContentWrapper from '@/components/ContentWrapper';

export default async function Home() {
  return (
    <ContentWrapper>
      <header className="flex flex-col items-center">
        <H2>Smederevo 2022 weather overview</H2>
      </header>
      <main className="w-full sm:w-3/4 sm:h-3/4">
        <MainMenu>
          <MainMenuItem href="/scatter-plot">
            <ScatterPlotIllustration />
            <P>Scatter Plot</P>
          </MainMenuItem>
          <MainMenuItem href="/radar">
            <RadarIllustration />
            <P>Radar</P>
          </MainMenuItem>
          <MainMenuItem href="/table">
            <P className="w-[90%] aspect-square flex items-center justify-center m-[5%] bg-zinc-100">
              WIP
            </P>
            <P>Table</P>
          </MainMenuItem>
        </MainMenu>
      </main>
    </ContentWrapper>
  );
}
