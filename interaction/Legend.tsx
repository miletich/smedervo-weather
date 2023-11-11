import GradientLegend from '@/sections/GradientLegend';
import { getGradientScaleFactor } from '@/utils/scales';

export default async function Legend() {
  const gradientScaleFactor = await getGradientScaleFactor();
  console.log(200 * gradientScaleFactor);

  return (
    <g className="legend">
      <GradientLegend />
    </g>
  );
}
