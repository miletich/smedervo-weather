import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
  midGray,
} from '@/utils/consts';
import { getData } from '@/utils/lib';
import RightHistogramHighlight from './RightHistogramHighlight';
import { getRightHistogramArea } from './utilsServer';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();
  const data = await getData();

  return (
    <g
      transform={`translate(${
        dimensions.innerWidth + histogramMargin + histogramHeight
      } 0) rotate(90)`}
    >
      <path d={d} fill={midGray} opacity={histogramOpacity} />
      <RightHistogramHighlight data={data} />
    </g>
  );
}