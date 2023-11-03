import {
  dimensions,
  histogramHeight,
  histogramMargin,
  histogramOpacity,
  midGray,
} from '@/utils/consts';
import { getRightHistogramArea } from '@/utils/lib';

export default async function RightHistogram() {
  const d = await getRightHistogramArea();

  return (
    <path
      d={d}
      fill={midGray}
      opacity={histogramOpacity}
      transform={`translate(${
        dimensions.innerWidth + histogramMargin + histogramHeight
      } 0) rotate(90)`}
    />
  );
}
