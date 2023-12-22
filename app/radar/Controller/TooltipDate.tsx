import { type PropsWithChildren } from 'react';

import {
  tooltipTextAdjust,
  tooltipTextCenter,
  tooltipTextDateSize,
} from '../consts';
import { gray } from '@/styles/tokens.stylex';

export default function TooltipDate({ children }: PropsWithChildren) {
  return (
    <text
      x={tooltipTextCenter}
      dy={tooltipTextAdjust}
      textAnchor="middle"
      dominantBaseline="hanging"
      fontSize={tooltipTextDateSize}
      fontWeight={600}
      fill={gray[400]}
    >
      {children}
    </text>
  );
}
