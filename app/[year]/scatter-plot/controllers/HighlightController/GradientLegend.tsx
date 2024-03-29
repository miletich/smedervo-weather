import * as d3 from 'd3';
import * as stylex from '@stylexjs/stylex';

import getData from '@/utils/getDataServer';
import { getYear } from '@/utils/yearContext';
import { peripheralsStyles } from '@/styles/peripherals';

import {
  gradientHeight,
  gradientId,
  gradientWidth,
  gradientX,
  gradientY,
  gradientLabelSize,
  gradientLabelOffset,
  tickSize,
  getSeasonStartDates,
} from '../../consts';
import { getScales } from '../../utils/scalesServer';

import GradientLegendText from './GradientLegendText';

type Props = { hideLabels?: boolean };
export default async function GradientLegend({ hideLabels = false }: Props) {
  const data = await getData();
  const { gradientScale } = await getScales();
  const gradientTicks = getSeasonStartDates(getYear()).map((d) => ({
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
      {!hideLabels && (
        <GradientLegendText data={data}>
          {gradientTicks.map(({ label, position }) => (
            <g key={label} transform={`translate(${position} 0)`}>
              <line
                {...stylex.props(peripheralsStyles.gridLineStronger)}
                y1={0}
                y2={tickSize}
              />
              <text
                textAnchor="middle"
                fontSize={gradientLabelSize}
                dy={-gradientLabelOffset}
                {...stylex.props(peripheralsStyles.axisValue)}
              >
                {label}
              </text>
            </g>
          ))}
        </GradientLegendText>
      )}
    </g>
  );
}
