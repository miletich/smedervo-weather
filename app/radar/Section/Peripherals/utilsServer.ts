import * as d3 from 'd3';

import { getScales } from '../../utils/scalesServer';
import { getCoordinatesForAngle } from '../../utils/angle';
import { tickLabelOffset } from '../../consts';
import { formatShortMonthName } from '@/utils/date';

export type TickProps = {
  label: string;
  x2: number;
  y2: number;
  labelX: number;
  labelY: number;
};
export type GetTicksProps = () => Promise<TickProps[]>;
export const getTicksProps: GetTicksProps = async () => {
  const { angleScale } = await getScales();
  const months = d3.timeMonth.range(
    angleScale.domain()[0],
    d3.timeDay.offset(angleScale.domain()[1], 1)
  );

  return months.map((m) => {
    const angle = angleScale(m);
    const [x2, y2] = getCoordinatesForAngle(angle);
    const [labelX, labelY] = getCoordinatesForAngle(angle, tickLabelOffset);

    return {
      x2,
      y2,
      label: formatShortMonthName(m),
      labelX,
      labelY,
    };
  });
};
