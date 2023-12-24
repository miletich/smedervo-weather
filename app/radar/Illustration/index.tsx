import ChartRadial from '@/components/ChartRadial';

import { dimensions } from '../consts';
import Temperature from '../sections/Temperature';
import UvIndex from '../sections/UvIndex';
import Precipitation from '../sections/Precipitation';
import CloudCover from '../sections/CloudCover/indext';
import IllustrationPeripherals from './IllustrationPeripherals';
import Defs from '../sections/Meta/Defs';

export default function Illustration() {
  return (
    <ChartRadial dimensions={dimensions}>
      <Defs />
      <IllustrationPeripherals />
      <Temperature />
      <UvIndex />
      <Precipitation />
      <CloudCover />
    </ChartRadial>
  );
}
