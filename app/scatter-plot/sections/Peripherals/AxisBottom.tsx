import { zinc } from '@/consts/colors';
import { tickLabelOffset, tickLabelSize, tickSize } from '../../consts';

import { type ScaleTick } from './utils';

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
      <line x1={0} x2={length} y1={length} y2={length} stroke={zinc[300]} />
      {!hideLabels &&
        ticks.map(({ label, position }) => (
          <g key={label} transform={`translate(${position}, ${length})`}>
            <line y1={0} y2={tickSize} stroke={zinc[300]} />
            <text
              dy={tickLabelOffset}
              fontSize={tickLabelSize}
              textAnchor="middle"
              alignmentBaseline="hanging"
              fill={zinc[400]}
            >
              {label}
            </text>
          </g>
        ))}
    </g>
  );
}
