import { gray, tickLabelOffset, tickLabelSize, tickSize } from '../../consts';

import { type ScaleTick } from './utils';

type Props = {
  ticks: ScaleTick[];
  length: number;
};

export default function AxisBottom({ ticks, length }: Props) {
  return (
    <g className="axis-bottom">
      <line x1={0} x2={length} y1={length} y2={length} stroke={gray} />
      {ticks.map(({ label, position }) => (
        <g key={label} transform={`translate(${position}, ${length})`}>
          <line y1={0} y2={tickSize} stroke={gray} />
          <text
            dy={tickLabelOffset}
            fontSize={tickLabelSize}
            textAnchor="middle"
            alignmentBaseline="hanging"
          >
            {label}
          </text>
        </g>
      ))}
    </g>
  );
}
