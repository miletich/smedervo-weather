import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
  midGray,
} from '@/utils/consts';
import { getData, getRightHistogramArea } from '@/utils/lib';
import RightHistogramHighlight from './RightHistogramHighlight';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();
  const data = await getData();

  return (
    <>
      <path
        d={d}
        fill={midGray}
        opacity={histogramOpacity}
        transform={`translate(${
          dimensions.innerWidth + histogramMargin + histogramHeight
        } 0) rotate(90)`}
      />
      <RightHistogramHighlight data={data} />
    </>
  );
}
