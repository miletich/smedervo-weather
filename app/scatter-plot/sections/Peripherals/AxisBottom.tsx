import * as stylex from '@stylexjs/stylex';

import { tickLabelOffset, tickLabelSize, tickSize } from '../../consts';

import { type ScaleTick } from './utils';
import { peripheralsStyles } from '@/styles/peripherals';

type Props = {
  ticks: ScaleTick[];
  length: number;
  hideLabels?: boolean;
};

export default function AxisBottom({
  ticks,
  length,
  hideLabels = false,
}: Props) {
  return (
    <g className="axis-bottom">
      <line
        x1={0}
        x2={length}
        y1={length}
        y2={length}
        {...stylex.props(peripheralsStyles.gridLine)}
      />
      {!hideLabels &&
        ticks.map(({ label, position }) => (
          <g key={label} transform={`translate(${position}, ${length})`}>
            <line
              y1={0}
              y2={tickSize}
              {...stylex.props(peripheralsStyles.gridLine)}
            />
            <text
              dy={tickLabelOffset}
              fontSize={tickLabelSize}
              textAnchor="middle"
              alignmentBaseline="hanging"
              {...stylex.props(peripheralsStyles.axisValue)}
            >
              {label}
            </text>
          </g>
        ))}
    </g>
  );
}
