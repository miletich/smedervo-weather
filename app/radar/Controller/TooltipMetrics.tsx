import { type PropsWithChildren } from 'react';

import P from '@/components/P';
import {
  gray,
  tooltipMetricFontSize,
  tooltipMetricNameWeight,
  tooltipMetricsY,
  tooltipTextAdjust,
  tooltipWidth,
} from '../consts';

export function TooltipMetrics({ children }: PropsWithChildren) {
  return <g transform={`translate(0,${tooltipMetricsY})`}>{children}</g>;
}

type ParentProps = { i: number; fill?: string } & PropsWithChildren;
export function TooltipMetric({ children, i, fill = gray }: ParentProps) {
  return (
    <text
      transform={`translate(0,${tooltipTextAdjust * i})`}
      fontSize={tooltipMetricFontSize}
      fill={fill}
      dominantBaseline="hanging"
    >
      {children}
    </text>
  );
}

type ChildProps = PropsWithChildren;

export function TooltipMetricTitle({ children }: ChildProps) {
  return (
    <tspan fontWeight={tooltipMetricNameWeight} dx={tooltipTextAdjust}>
      {children}
    </tspan>
  );
}

export function TooltipMetricValue({ children }: ChildProps) {
  return (
    <tspan x={tooltipWidth - tooltipTextAdjust} textAnchor="end">
      {children}
    </tspan>
  );
}
