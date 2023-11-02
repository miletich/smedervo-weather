import Image from 'next/image';
import H2 from '../components/H2';
import P from '../components/P';
import Chart from '@/components/Chart';
import { dimensions, dotSize } from '@/utils/consts';
import AxisLeft from '@/components/AxisLeft';
import { getScaleTicks, getScales } from '@/utils/scales';
import { getDotProps } from '@/utils/lib';
import AxisBottom from '@/components/AxisBottom';

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
        <AxisLeft ticks={yScaleTicks} length={dimensions.innerHeight} />
        <g className="dots">
          {dots.map((d, i) => (
            <circle key={`${d.cx}-${d.cy}-${i}`} r={dotSize} {...d} />
          ))}
        </g>
      </Chart>
    </main>
  );
}
