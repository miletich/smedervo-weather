import Image from 'next/image';
import H2 from '../components/H2';
import P from '../components/P';
import Chart from '@/components/Chart';
import { dimensions, dotSize } from '@/utils/consts';
import { getDotProps } from '@/utils/lib';

export default async function Home() {
  const dots = await getDotProps();

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
        <g className="dots">
          {dots.map((d, i) => (
            <circle key={`${d.cx}-${d.cy}-${i}`} r={dotSize} {...d} />
          ))}
        </g>
      </Chart>
    </main>
  );
}
