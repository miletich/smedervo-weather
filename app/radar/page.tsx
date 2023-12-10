import ChartRadial from '@/components/ChartRadial';

import { dimensions } from './consts';
import Peripherals from './sections/Peripherals';
import Meta from './sections/Meta';
import Temperature from './sections/Temperature';
import UvIndex from './sections/UvIndex';
import Precipitation from './sections/Precipitation';

export default function Radar() {
  return (
    <ChartRadial dimensions={dimensions} className="overflow-visible">
      <Meta />
      <Peripherals />
      <Temperature />
      <UvIndex />
      <Precipitation />
    </ChartRadial>
  );
}
