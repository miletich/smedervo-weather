import type { PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';
import P from '@/components/P';
import { MainGalleryItem, MainGallery } from '@/components/MainGallery';

import ScatterPlotIllustration from './scatter-plot/Illustration';
import RadarIllustration from './radar/Illustration';
import ContentWrapper from '@/components/ContentWrapper';
import { gray } from '@/styles/tokens.stylex';
import { colorScheme } from '../styles/tokens.stylex';
import TableIllustration from './table/Illustration';
// SX bug
// import { SM } from '@/styles/mediaQueries';

export default async function Home() {
  return (
    <ContentWrapper>
      <header>
        <H2>Smederevo 2022 weather overview</H2>
      </header>
      <main {...stylex.props(styles.main)}>
        <MainGallery>
          <MainGalleryItem href="/scatter-plot">
            <ScatterPlotIllustration />
            <P>Scatter Plot</P>
          </MainGalleryItem>
          <MainGalleryItem href="/radar">
            <RadarIllustration />
            <P>Radar</P>
          </MainGalleryItem>
          <MainGalleryItem href="/table">
            <TableIllustration />
            <P>Table</P>
          </MainGalleryItem>
        </MainGallery>
      </main>
    </ContentWrapper>
  );
}

const SM = '@media (min-width: 640px)';

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
