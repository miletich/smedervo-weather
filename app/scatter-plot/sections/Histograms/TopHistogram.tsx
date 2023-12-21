import { zinc } from '@/consts/colors';

import {
  histogramHeight,
  histogramMargin,
  histogramOpacity,
} from '../../consts';
import getData from '@/utils/getDataServer';

import TopHistogramHighlight from './TopHistogramHighlight';
import { getTopHistogramArea } from './utilsServer';

export default async function TopHistogram() {
  // main histogram
  const d = await getTopHistogramArea();

  // highlight
  const data = await getData();

  return (
    <g transform={`translate(0 ${-histogramHeight - histogramMargin})`}>
      <path d={d} fill={zinc[300]} opacity={histogramOpacity} />
      <TopHistogramHighlight data={data} />
    </g>
  );
}
