import { type PropsWithChildren } from 'react';

import P from '@/components/P';
import { gray } from '../consts';

export default function TooltipMetric({ children }: PropsWithChildren) {
  return (
    <P className="flex justify-between w-full text-xs leading-5 transition-all">
      {children}
    </P>
  );
}

type ChildProps = PropsWithChildren & { color?: string };

export function TooltipMetricTitle({ children, color = gray }: ChildProps) {
  return (
    <span className="font-bold pe-1" style={{ color }}>
      {children}
    </span>
  );
}

export function TooltipMetricValue({ children, color = gray }: ChildProps) {
  return (
    <span className="tabular-nums" style={{ color }}>
      {children}
    </span>
  );
}
