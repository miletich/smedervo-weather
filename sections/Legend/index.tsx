import { getGradientScaleFactor } from '@/utils/scales';
import GradientLegend from './GradientLegend';
import HighlightBar from './HighlightBar';
import { gradientX, gradientY } from '@/utils/consts';

export default async function Legend() {
  const gradientScaleFactor = await getGradientScaleFactor();

  return (
    <g className="legend" transform={`translate(${gradientX} ${gradientY})`}>
      <GradientLegend />
      <HighlightBar x={0} />
    </g>
  );
}
