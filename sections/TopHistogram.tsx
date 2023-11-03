import {
  histogramHeight,
  histogramMargin,
  histogramOpacity,
  midGray,
} from '@/utils/consts';
import { getTopHistogramArea } from '@/utils/lib';

export default async function TopHistogram() {
  const d = await getTopHistogramArea();

  return (
    <path
      d={d}
      fill={midGray}
      opacity={histogramOpacity}
      transform={`translate(0 ${-histogramHeight - histogramMargin})`}
    />
  );
}
