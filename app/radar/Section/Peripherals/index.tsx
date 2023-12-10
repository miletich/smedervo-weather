import { Fragment } from 'react';

import { tickColor } from '../../consts';

import MonthLabel from './MonthLabel';

import { getMonthTicksProps, getTemperatureTickProps } from './utilsServer';
import FreezingMarker from './FreezingMarker';

export default async function Peripherals() {
  const mothTicksProps = await getMonthTicksProps();
  const temperatureTicksProps = await getTemperatureTickProps();

  return (
    <g className="peripherals">
      {mothTicksProps.map(({ x2, y2, label, labelX, labelY }) => (
        <Fragment key={label}>
          <line x2={x2} y2={y2} stroke={tickColor} />
          <MonthLabel labelX={labelX} labelY={labelY} label={label} />
        </Fragment>
      ))}
      {temperatureTicksProps.map(({ label, r }) => (
        <Fragment key={label}>
          <circle r={r} fill="none" stroke={tickColor} />
        </Fragment>
      ))}
      <FreezingMarker />
    </g>
  );
}
