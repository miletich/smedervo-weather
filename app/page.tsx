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
      <header {...stylex.props(styles.header)}>
        <H2 styleX={styles.title}>Smederevo Weather Overview</H2>
        <P>Yearly Overview of Weather in Smedervo, Serbia</P>
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
      default: null,
      [SM]: '75%',
    },
    marginBottom: '6rem',
  },
  title: {
    marginBottom: '0.25rem',
  },
  header: {
    marginBottom: '3rem',
  },
});
