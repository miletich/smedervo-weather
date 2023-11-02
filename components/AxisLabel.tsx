import { darkGray } from '@/utils/consts';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  transform?: string;
}>;

export default function AxisLabel({ transform, children }: Props) {
  return (
    <text
      fill={darkGray}
      textAnchor="middle"
      alignmentBaseline="middle"
      fontSize={14}
      transform={transform}
    >
      {children}
    </text>
  );
}
