import * as d3 from 'd3';

import { getScales } from '../../utils/scalesServer';
import { getCoordinatesForAngle } from '../../utils/angle';

type GetTicksProps = () => Promise<{ id: string; x2: number; y2: number }[]>;
export const getTicksProps: GetTicksProps = async () => {
  const { angleScale } = await getScales();
  const months = d3.timeMonth.range(
    angleScale.domain()[0],
    d3.timeDay.offset(angleScale.domain()[1], 1)
  );

  return months.map((m) => {
    const [x2, y2] = getCoordinatesForAngle(angleScale(m));

    return {
      id: m.toISOString(),
      x2,
      y2,
    };
  });
};
