import { type PropsWithChildren } from 'react';

import { tooltipTextCenter, tooltipTextTemperatureY } from '../consts';

export function TooltipTemperature({ children }: PropsWithChildren) {
  return (
    <text
      x={tooltipTextCenter}
      y={tooltipTextTemperatureY}
      textAnchor="middle"
      dominantBaseline="hanging"
    >
      {children}
    </text>
  );
}

type Props = PropsWithChildren & { fill?: string };
export function TooltipTemperatureSpan({ children, fill }: Props) {
  return <tspan fill={fill}>{children}</tspan>;
}
