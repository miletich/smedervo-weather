import { type PropsWithChildren } from 'react';
import {
  darkGray,
  tooltipTextAdjust,
  tooltipTextCenter,
  tooltipTextDateSize,
} from '../consts';

export default function TooltipDate({ children }: PropsWithChildren) {
  return (
    <text
      x={tooltipTextCenter}
      dy={tooltipTextAdjust}
      className="font-semibold"
      textAnchor="middle"
      dominantBaseline="hanging"
      fontSize={tooltipTextDateSize}
      fill={darkGray}
    >
      {children}
    </text>
  );
}
