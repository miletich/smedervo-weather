import ChartRadial from '@/components/ChartRadial';

import { dimensions } from './consts';
import Peripherals from './Section/Peripherals';

export default function Radar() {
  return (
    <ChartRadial dimensions={dimensions} className="overflow-visible">
      <Peripherals />
    </ChartRadial>
  );
}
