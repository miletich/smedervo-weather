import Chart from '@/components/Chart';
import { dimensions } from './consts';
import Meta from './Meta';

export default function TableIllustration() {
  return (
    <Chart dimensions={dimensions} role="img">
      <Meta />
      <rect
        width={dimensions.innerWidth}
        height={dimensions.innerHeight}
        fill="gray"
      />
      <text
        x={dimensions.innerWidth / 2}
        y={dimensions.innerHeight / 2}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        WIP
      </text>
    </Chart>
  );
}
