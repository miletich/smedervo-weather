import * as stylex from '@stylexjs/stylex';

import getData from '@/utils/getDataServer';

import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
} from '../../consts';

import RightHistogramHighlight from './RightHistogramHighlight';
import { getRightHistogramArea } from './utilsServer';
import { histogramStyles } from './styes';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();
  const data = await getData();

  return (
    <g
      transform={`translate(${
        dimensions.innerWidth + histogramMargin + histogramHeight
      } 0) rotate(90)`}
    >
      <path
        d={d}
        opacity={histogramOpacity}
        {...stylex.props(histogramStyles.area)}
      />
      <RightHistogramHighlight data={data} />
    </g>
  );
}
