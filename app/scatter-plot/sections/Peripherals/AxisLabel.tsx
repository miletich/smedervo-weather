import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

import { axisLabelSize } from '../../consts';
import { peripheralsStyles } from '@/styles/peripherals';

type Props = PropsWithChildren<{
  transform?: string;
}>;

export default function AxisLabel({ transform, children }: Props) {
  return (
    <text
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize={axisLabelSize}
      transform={transform}
      {...stylex.props(peripheralsStyles.axisValue)}
    >
      {children}
    </text>
  );
}
