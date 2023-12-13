import { Fragment } from 'react';

import FreezingMarker from './FreezingMarker';
import TemperatureTicks from './TemperatureTicks';
import MonthTicks from './MonthTicks';

export default async function Peripherals() {
  return (
    <g className="peripherals">
      <MonthTicks />
      <TemperatureTicks />
      <FreezingMarker />
    </g>
  );
}
