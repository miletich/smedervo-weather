import { tickLabelColor, tickLabelSize, tickLabelWeight } from '../../consts';
import { type TickProps } from './utilsServer';

type Props = Pick<TickProps, 'label' | 'labelX' | 'labelY'>;

export default function MonthLabel({ label, labelX, labelY }: Props) {
  return (
    <text
      x={labelX}
      y={labelY}
      fontSize={tickLabelSize}
      fontWeight={tickLabelWeight}
      fill={tickLabelColor}
      dominantBaseline="middle"
      textAnchor={
        Math.abs(labelX) < 7 ? 'middle' : labelX > 0 ? 'start' : 'end'
      }
    >
      {label}
    </text>
  );
}
