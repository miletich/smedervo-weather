import { white } from '@/consts/colors';

import { dimensions } from '../consts';
import GradientLegend from '../controllers/HighlightController/GradientLegend';
import AxisBottom from '../sections/Peripherals/AxisBottom';
import AxisLeft from '../sections/Peripherals/AxisLeft';
import { getScaleTicks } from '../sections/Peripherals/utils';
import { getScales } from '../utils/scalesServer';

export default async function IllustrationPeripherals() {
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
      <AxisBottom
        ticks={xScaleTicks}
        length={dimensions.innerWidth}
        hideLabels
      />
      <AxisLeft
        ticks={yScaleTicks}
        length={dimensions.innerHeight}
        hideLabels
      />
      <GradientLegend hideLabels />
    </>
  );
}
