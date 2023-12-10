import ChartRadial from '@/components/ChartRadial';

import { dimensions } from './consts';
import Peripherals from './Section/Peripherals';
import Meta from './Section/Meta';

export default function Radar() {
  return (
    <ChartRadial dimensions={dimensions} className="overflow-visible">
      <Meta />
      <Peripherals />
    </ChartRadial>
  );
}
