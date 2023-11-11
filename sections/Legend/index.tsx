import { getGradientScaleFactor } from '@/utils/scales';
import GradientLegend from './GradientLegend';
import HighlightBar from './HighlightBar';

export default async function Legend() {
  const gradientScaleFactor = await getGradientScaleFactor();

  return (
    <g className="legend">
      <GradientLegend />
      <HighlightBar x={0} />
    </g>
  );
}
