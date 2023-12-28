import * as stylex from '@stylexjs/stylex';

import getData from '@/utils/getDataServer';

import {
  histogramHeight,
  histogramMargin,
  histogramOpacity,
} from '../../consts';

import TopHistogramHighlight from './TopHistogramHighlight';
import { getTopHistogramArea } from './utilsServer';
import { histogramStyles } from './styes';

export default async function TopHistogram() {
  // main histogram
  const d = await getTopHistogramArea();

  // highlight
  const data = await getData();

  return (
    <g transform={`translate(0 ${-histogramHeight - histogramMargin})`}>
      <path
        d={d}
        opacity={histogramOpacity}
        {...stylex.props(histogramStyles.area)}
      />
      <TopHistogramHighlight data={data} />
    </g>
  );
}
