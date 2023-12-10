import { Fragment } from 'react';

import { tickColor } from '../../consts';

import MonthLabel from './MonthLabel';

import { getTicksProps } from './utilsServer';
import FreezingMarker from './FreezingMarker';

export default async function Peripherals() {
  const ticksProps = await getTicksProps();

  return (
    <g className="peripherals">
      {ticksProps.map(({ x2, y2, label, labelX, labelY }) => (
        <Fragment key={label}>
          <line x2={x2} y2={y2} stroke={tickColor} />
          <MonthLabel labelX={labelX} labelY={labelY} label={label} />
        </Fragment>
      ))}
      <FreezingMarker />
    </g>
  );
}
