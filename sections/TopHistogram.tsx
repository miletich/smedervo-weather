import {
  histogramHeight,
  histogramMargin,
  histogramOpacity,
  midGray,
} from '@/utils/consts';
import { getData, getTopHistogramArea } from '@/utils/lib';
import TopHistogramHighlight from './TopHistogramHighlight';

export default async function TopHistogram() {
  // main histogram
  const d = await getTopHistogramArea();

  // highlight
  const data = await getData();

  return (
    <g transform={`translate(0 ${-histogramHeight - histogramMargin})`}>
      <path d={d} fill={midGray} opacity={histogramOpacity} />
      <TopHistogramHighlight data={data} />
    </g>
  );
}
