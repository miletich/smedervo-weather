import { type PropsWithChildren } from 'react';

import { axisLabelSize } from '../../consts';
import { zinc } from '@/consts/colors';

type Props = PropsWithChildren<{
  transform?: string;
}>;

export default function AxisLabel({ transform, children }: Props) {
  return (
    <text
      fill={zinc[800]}
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize={axisLabelSize}
      transform={transform}
    >
      {children}
    </text>
  );
}
