import { type PropsWithChildren } from 'react';

import {
  tooltipTextAdjust,
  tooltipTextCenter,
  tooltipTextDateSize,
} from '../consts';
import { gray } from '@/consts/colors';

export default function TooltipDate({ children }: PropsWithChildren) {
  return (
    <text
      x={tooltipTextCenter}
      dy={tooltipTextAdjust}
      className="font-semibold"
      textAnchor="middle"
      dominantBaseline="hanging"
      fontSize={tooltipTextDateSize}
      fill={gray[400]}
    >
      {children}
    </text>
  );
}
