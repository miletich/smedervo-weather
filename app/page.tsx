import type { PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';
import P from '@/components/P';
import MainMenuItem, { MainMenu } from '@/components/MainMenu';

import ScatterPlotIllustration from './scatter-plot/Illustration';
import RadarIllustration from './radar/Illustration.tsx';
import ContentWrapper from '@/components/ContentWrapper';
import { gray } from '@/styles/tokens.stylex';
import { colorScheme } from '../styles/tokens.stylex';
// SX bug
// import { SM } from '@/styles/mediaQueries';

export default async function Home() {
  return (
    <ContentWrapper>
      <header>
        <H2>Smederevo 2022 weather overview</H2>
      </header>
      <main {...stylex.props(styles.main)}>
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
            <P {...stylex.props(styles.wip)}>WIP</P>
            <P>Table</P>
          </MainMenuItem>
        </MainMenu>
      </main>
    </ContentWrapper>
  );
}

export const SM = '@media (min-width: 640px)';

const styles = stylex.create({
  main: {
    width: {
      default: '100%',
      [SM]: '75%',
    },
    height: {
      default: 'auto',
      [SM]: '75%',
    },
  },
  wip: {
    width: '90%',
    aspectRatio: '1 / 1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorScheme.wipBackground,
    margin: '5%',
  },
});
