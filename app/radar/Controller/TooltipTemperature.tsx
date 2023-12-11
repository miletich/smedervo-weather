import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren & { color: string };
export default function TooltipTemperature({ children, color }: Props) {
  return (
    <span className="tabular-nums" style={{ color }}>
      {children}
    </span>
  );
}
