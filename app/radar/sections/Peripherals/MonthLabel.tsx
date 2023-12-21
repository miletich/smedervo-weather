import { zinc } from '@/consts/colors';

import { monthTickLabelSize, monthTickLabelWeight } from '../../consts';
import { type MonthTickProps } from './utilsServer';

type Props = Pick<MonthTickProps, 'label' | 'labelX' | 'labelY'>;

export default function MonthLabel({ label, labelX, labelY }: Props) {
  return (
    <text
      x={labelX}
      y={labelY}
      fontSize={monthTickLabelSize}
      fontWeight={monthTickLabelWeight}
      fill={zinc[400]}
      dominantBaseline="middle"
      textAnchor={
        Math.abs(labelX) < 7 ? 'middle' : labelX > 0 ? 'start' : 'end'
      }
    >
      {label}
    </text>
  );
}
