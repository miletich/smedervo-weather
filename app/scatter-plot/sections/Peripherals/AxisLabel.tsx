import { type PropsWithChildren } from 'react';

import { axisLabelSize, black } from '../../consts';

type Props = PropsWithChildren<{
  transform?: string;
}>;

export default function AxisLabel({ transform, children }: Props) {
  return (
    <text
      fill={black}
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize={axisLabelSize}
      transform={transform}
    >
      {children}
    </text>
  );
}
