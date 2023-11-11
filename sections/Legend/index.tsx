import { getGradientScaleFactor } from '@/utils/scales';
import GradientLegend from './GradientLegend';

export default async function Legend() {
  const gradientScaleFactor = await getGradientScaleFactor();

  return (
    <g className="legend">
      <GradientLegend />
    </g>
  );
}
