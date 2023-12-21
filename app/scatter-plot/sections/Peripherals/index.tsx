import { white } from '@/styles/tokens.stylex';

import { axisLabelOffset, dimensions } from '../../consts';
import { getScales } from '../../utils/scalesServer';

import AxisBottom from './AxisBottom';
import AxisLabel from './AxisLabel';
import AxisLeft from './AxisLeft';
import { getScaleTicks } from './utils';

export default async function Peripherals() {
  const { xScale, yScale } = await getScales();
  const xScaleTicks = getScaleTicks({ scale: xScale, tickCount: 4 });
  const yScaleTicks = getScaleTicks({ scale: yScale, tickCount: 4 });
  return (
    <>
      <rect
        width={dimensions.innerWidth}
        height={dimensions.innerHeight}
        x={0}
        y={0}
        fill={white}
      />
      <AxisBottom ticks={xScaleTicks} length={dimensions.innerWidth} />
      <AxisLabel
        transform={`translate(${dimensions.innerWidth / 2}, ${
          dimensions.innerHeight + axisLabelOffset
        })`}
      >
        Minimum Temperature °C
      </AxisLabel>
      <AxisLeft ticks={yScaleTicks} length={dimensions.innerHeight} />
      <AxisLabel
        transform={`translate(${-axisLabelOffset}, ${
          dimensions.innerHeight / 2
        }) rotate(-90)`}
      >
        Maximum Temperature °C
      </AxisLabel>
    </>
  );
}
