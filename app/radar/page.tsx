import ChartRadial from '@/components/ChartRadial';

import { dimensions } from './consts';
import Peripherals from './sections/Peripherals';
import Meta from './sections/Meta';
import Temperature from './sections/Temperature';
import UvIndex from './sections/UvIndex';
import Precipitation from './sections/Precipitation';
import CloudCover from './sections/CloudCover/indext';
import Annotations from './sections/Annotations';

export default function Radar() {
  return (
    <ChartRadial
      dimensions={dimensions}
      className="overflow-visible w-[75vh] h-[75vh]"
    >
      <Meta />
      <Peripherals />
      <Temperature />
      <UvIndex />
      <Precipitation />
      <CloudCover />
      <Annotations />
    </ChartRadial>
  );
}
