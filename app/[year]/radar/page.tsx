import * as stylex from '@stylexjs/stylex';

import ChartRadial from '@/components/ChartRadial';
import { getYear } from '@/utils/yearContext';

import { dimensions } from './consts';
import Peripherals from './sections/Peripherals';
import Meta from './sections/Meta';
import Temperature from './sections/Temperature';
import UvIndex from './sections/UvIndex';
import Precipitation from './sections/Precipitation';
import CloudCover from './sections/CloudCover/indext';
import Annotations from './sections/Annotations';
import Controller from './Controller';

export { yearGenerateStaticParams as generateStaticParams } from '@/static/yearGenerateStaticParams';

export default function Radar() {
  return (
    <ChartRadial
      key={getYear()}
      dimensions={dimensions}
      styleX={styles.wrapper}
    >
      <Meta />
      <Peripherals />
      <Temperature />
      <UvIndex />
      <Precipitation />
      <CloudCover />
      <Annotations />
      <Controller />
    </ChartRadial>
  );
}

const styles = stylex.create({
  wrapper: {
    overflow: 'visible',
    width: '70vw',
    height: '70vh',
  },
});
