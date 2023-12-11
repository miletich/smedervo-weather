import { type PropsWithChildren, type CSSProperties } from 'react';

import P from '@/components/P';

export default function TooltipMetric({ children }: PropsWithChildren) {
  return (
    <P className="flex justify-between w-full text-sm leading-5 transition-all">
      {children}
    </P>
  );
}

type ChildProps = PropsWithChildren & { style?: CSSProperties };

export function TooltipMetricTitle({ children, style }: ChildProps) {
  return (
    <span className="font-bold pe-1" style={style}>
      {children}
    </span>
  );
}

export function TooltipMetricValue({ children, style }: ChildProps) {
  return (
    <span className="tabular-nums" style={style}>
      {children}
    </span>
  );
}
