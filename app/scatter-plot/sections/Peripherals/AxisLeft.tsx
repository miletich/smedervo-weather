import { gray } from '@/consts/colors';
import { tickLabelOffset, tickLabelSize, tickSize } from '../../consts';

import { type ScaleTick } from './utils';

type Props = {
  ticks: ScaleTick[];
  length: number;
  hideLabels?: boolean;
};

export default function AxisLeft({ ticks, length, hideLabels = false }: Props) {
  return (
    <g className="axis-left">
      <line x1={0} x2={0} y1={0} y2={length} stroke={gray[300]} />
      {!hideLabels &&
        ticks.map(({ label, position }) => (
          <g key={label} transform={`translate(0, ${position})`}>
            <line x1={-tickSize} x2={0} stroke={gray[300]} />
            <text
              dx={-tickLabelOffset}
              textAnchor="end"
              alignmentBaseline="middle"
              fill={gray[400]}
              fontSize={tickLabelSize}
            >
              {label}
            </text>
          </g>
        ))}
    </g>
  );
}
