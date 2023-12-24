import * as stylex from '@stylexjs/stylex';

import { monthTickLabelSize, monthTickLabelWeight } from '../../consts';
import { type MonthTickProps } from './utilsServer';
import { peripheralsStyles } from '@/styles/peripherals';

type Props = Pick<MonthTickProps, 'label' | 'labelX' | 'labelY'>;

export default function MonthLabel({ label, labelX, labelY }: Props) {
  return (
    <text
      x={labelX}
      y={labelY}
      fontSize={monthTickLabelSize}
      fontWeight={monthTickLabelWeight}
      dominantBaseline="middle"
      textAnchor={
        Math.abs(labelX) < 7 ? 'middle' : labelX > 0 ? 'start' : 'end'
      }
      {...stylex.props(peripheralsStyles.axisValue)}
    >
      {label}
    </text>
  );
}
