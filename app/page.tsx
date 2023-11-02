import Image from 'next/image';
import H2 from '../components/H2';
import P from '../components/P';
import Chart from '@/components/Chart';
import { axisLabelOffset, dimensions, dotSize } from '@/utils/consts';
import AxisLeft from '@/components/AxisLeft';
import { getScaleTicks, getScales } from '@/utils/scales';
import { getDotProps } from '@/utils/lib';
import AxisBottom from '@/components/AxisBottom';
import AxisLabel from '@/components/AxisLabel';

export default async function Home() {
  const dots = await getDotProps();
  const { xScale, yScale } = await getScales();
  const xScaleTicks = getScaleTicks({ scale: xScale, tickCount: 4 });
  const yScaleTicks = getScaleTicks({ scale: yScale, tickCount: 4 });

  return (
    <main>
      <Chart
        dimensions={dimensions}
        role="img"
        aria-labelledby="sdWeatherTitle sdWeatherDescription"
        className="w-[75vw] h-[75vh]"
      >
        <title>Daily Temperature Ranges</title>
        <desc>
          Visualisation of daily minimum and maximum temperatures in Smederevo,
          Serbia, in 2022...
        </desc>
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
        <g className="dots">
          {dots.map((d, i) => (
            <circle key={`${d.cx}-${d.cy}-${i}`} r={dotSize} {...d} />
          ))}
        </g>
      </Chart>
    </main>
  );
}
