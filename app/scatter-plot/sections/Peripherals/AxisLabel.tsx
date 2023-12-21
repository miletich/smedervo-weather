import { type PropsWithChildren } from 'react';

import { axisLabelSize } from '../../consts';
import { gray } from '@/consts/colors';

type Props = PropsWithChildren<{
  transform?: string;
}>;

export default function AxisLabel({ transform, children }: Props) {
  return (
    <text
      fill={gray[800]}
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize={axisLabelSize}
      transform={transform}
    >
      {children}
    </text>
  );
}
