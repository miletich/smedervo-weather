import {
  darkGray,
  gray,
  tickLabelOffset,
  tickLabelSize,
  tickSize,
} from '@/utils/consts';

import { type ScaleTick } from './utils';

type Props = {
  ticks: ScaleTick[];
  length: number;
};

export default function AxisLeft({ ticks, length }: Props) {
  return (
    <g className="axis-left">
      <line x1={0} x2={0} y1={0} y2={length} stroke={gray} />
      {ticks.map(({ label, position }) => (
        <g key={label} transform={`translate(0, ${position})`}>
          <line x1={-tickSize} x2={0} stroke={gray} />
          <text
            dx={-tickLabelOffset}
            textAnchor="end"
            alignmentBaseline="middle"
            fill={darkGray}
            fontSize={tickLabelSize}
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}
