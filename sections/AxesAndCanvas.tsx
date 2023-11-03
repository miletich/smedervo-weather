import { getScaleTicks, getScales } from '@/utils/scales';
import { axisLabelOffset, dimensions } from '@/utils/consts';
import AxisBottom from '@/components/AxisBottom';
import AxisLabel from '@/components/AxisLabel';
import AxisLeft from '@/components/AxisLeft';

export default async function AxesAndCanvas() {
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
        fill="white"
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
