import * as stylex from '@stylexjs/stylex';

import H2 from '@/components/H2';
import P from '@/components/P';
import { MainGalleryItem, MainGallery } from '@/components/MainGallery';

import ContentWrapper from '@/components/ContentWrapper';
import PageTransition from '@/components/PageTransition';
import { selectedYear } from '@/utils/selectedYear';
import { gray } from '@/styles/tokens.stylex';
import { generic } from '@/styles/generic';
import { colorScheme } from '../../styles/tokens.stylex';

import TableIllustration from './table/Illustration';
import ScatterPlotIllustration from './scatter-plot/Illustration';
import RadarIllustration from './radar/Illustration';

// SX bug
// import { SM } from '@/styles/mediaQueries';
export const generateStaticParams = () => [{ slug: '2022' }, { slug: '2021' }];

type Props = {
  params: {
    year: string;
  };
};

export default async function Home({ params }: Props) {
  const year = +params.year;

  return (
    <ContentWrapper>
      <PageTransition {...stylex.props(styles.wrapper, generic.centerXY)}>
        <header {...stylex.props(styles.header)}>
          <H2 styleX={styles.title}>Smederevo Weather Overview</H2>
          <P>Yearly Overview of Weather in Smedervo, Serbia</P>
        </header>
        <main {...stylex.props(styles.main)}>
          <MainGallery>
            <MainGalleryItem href={`/${year}/scatter-plot`}>
              <ScatterPlotIllustration />
              <P>Scatter Plot</P>
            </MainGalleryItem>
            <MainGalleryItem href={`/${year}/radar`}>
              <RadarIllustration />
              <P>Radar</P>
            </MainGalleryItem>
            <MainGalleryItem href={`/${year}/table`}>
              <TableIllustration />
              <P>Table</P>
            </MainGalleryItem>
          </MainGallery>
        </main>
      </PageTransition>
    </ContentWrapper>
  );
}

const SM = '@media (min-width: 640px)';

const styles = stylex.create({
  wrapper: {
    width: {
      default: '100%',
      [SM]: '75%',
    },
    height: {
      default: null,
      [SM]: '75%',
    },
    flexDirection: 'column',
    marginBottom: '6rem',
  },
  main: {
    width: '100%',
  },
  title: {
    marginBottom: '0.25rem',
  },
  header: {
    marginBottom: '3rem',
  },
});
