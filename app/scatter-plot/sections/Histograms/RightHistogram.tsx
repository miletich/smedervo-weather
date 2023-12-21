import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
} from '../../consts';
import getData from '@/utils/getDataServer';

import RightHistogramHighlight from './RightHistogramHighlight';
import { getRightHistogramArea } from './utilsServer';
import { gray } from '@/styles/tokens.stylex';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();
  const data = await getData();

  return (
    <g
      transform={`translate(${
        dimensions.innerWidth + histogramMargin + histogramHeight
      } 0) rotate(90)`}
    >
      <path d={d} fill={gray[300]} opacity={histogramOpacity} />
      <RightHistogramHighlight data={data} />
    </g>
  );
}
