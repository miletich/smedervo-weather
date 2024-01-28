import * as stylex from '@stylexjs/stylex';

import { tickLabelOffset, tickLabelSize, tickSize } from '../../consts';

import { type ScaleTick } from './utils';
import { peripheralsStyles } from '@/styles/peripherals';

type Props = {
  ticks: ScaleTick[];
  length: number;
  hideLabels?: boolean;
};

export default function AxisLeft({ ticks, length, hideLabels = false }: Props) {
  return (
    <g className="axis-left">
      <line
        x1={0}
        x2={0}
        y1={0}
        y2={length}
        {...stylex.props(peripheralsStyles.gridLine)}
      />
      {!hideLabels &&
        ticks.map(({ label, position }) => (
          <g key={label} transform={`translate(0, ${position})`}>
            <line
              x1={-tickSize}
              x2={0}
              {...stylex.props(peripheralsStyles.gridLine)}
            />
            <text
              dx={-tickLabelOffset}
              textAnchor="end"
              alignmentBaseline="middle"
              fontSize={tickLabelSize}
              {...stylex.props(peripheralsStyles.axisValue)}
            >
              {label}
            </text>
          </g>
        ))}
    </g>
  );
}
