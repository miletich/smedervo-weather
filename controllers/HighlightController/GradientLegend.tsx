import * as d3 from 'd3';

import {
  dimensions,
  gradientHeight,
  gradientId,
  gradientWidth,
  gradientX,
  gradientY,
  gradientOffset,
  seasonStartDates,
  gradientLabelSize,
  gradientLabelOffset,
  darkGray,
  tickSize,
} from '@/utils/consts';
import { getScales } from '@/utils/scalesServer';
import { getData } from '@/utils/lib';
import GradientLegendText from './GradientLegendText';

export default async function GradientLegend() {
  const data = await getData();
  const { gradientScale } = await getScales();
  const gradientTicks = seasonStartDates.map((d) => ({
    label: d3.timeFormat('%b')(d),
    position: gradientScale(d),
  }));

  return (
    <g
      className="gradient-legend"
      transform={`translate(${gradientX} ${gradientY})`}
    >
      <rect
        width={gradientWidth}
        height={gradientHeight}
        fill={`url(#${gradientId})`}
      />
      <GradientLegendText data={data}>
        {gradientTicks.map(({ label, position }) => (
          <g key={label} transform={`translate(${position} 0)`}>
            <line stroke={darkGray} y1={0} y2={tickSize} />
            <text
              textAnchor="middle"
              fontSize={gradientLabelSize}
              dy={-gradientLabelOffset}
            >
              {label}
            </text>
          </g>
        ))}
      </GradientLegendText>
    </g>
  );
}
