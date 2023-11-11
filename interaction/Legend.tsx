import GradientLegend from '@/sections/GradientLegend';
import { getGradientScaleRecord } from '@/utils/scales';

export default async function Legend() {
  const { domain, range } = await getGradientScaleRecord();
  console.log({ domain, range });

  return (
    <g className="legend">
      <GradientLegend />
    </g>
  );
}
