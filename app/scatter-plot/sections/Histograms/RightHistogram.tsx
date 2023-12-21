import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
} from '../../consts';
import getData from '@/utils/getDataServer';

import RightHistogramHighlight from './RightHistogramHighlight';
import { getRightHistogramArea } from './utilsServer';
import { zinc } from '@/consts/colors';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();
  const data = await getData();

  return (
    <g
      transform={`translate(${
        dimensions.innerWidth + histogramMargin + histogramHeight
      } 0) rotate(90)`}
    >
      <path d={d} fill={zinc[300]} opacity={histogramOpacity} />
      <RightHistogramHighlight data={data} />
    </g>
  );
}
