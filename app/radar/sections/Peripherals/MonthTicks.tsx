import { Fragment } from 'react';

import { gray } from '../../consts';

import MonthLabel from './MonthLabel';

import { getMonthTicksProps } from './utilsServer';

type Props = { hideLabels?: boolean };
export default async function MonthTicks({ hideLabels = false }: Props) {
  const monthTicks = await getMonthTicksProps();

  return (
    <g className="peripherals">
      {monthTicks.map(({ x2, y2, label, labelX, labelY }) => (
        <Fragment key={label}>
          <line x2={x2} y2={y2} stroke={gray} />
          {!hideLabels && (
            <MonthLabel labelX={labelX} labelY={labelY} label={label} />
          )}
        </Fragment>
      ))}
    </g>
  );
}
