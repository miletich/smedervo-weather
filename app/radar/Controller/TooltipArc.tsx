import { gray } from '@/styles/tokens.stylex';

import { tooltipArcOpacity } from '../consts';
import { type Coordinates } from './eventHandlers';
import { generateTooltipArc, useTooltipAngle } from './utils';

type Props = {
  coordinates: Exclude<Coordinates, null>;
};

export default function TooltipArc({ coordinates }: Props) {
  const angle = useTooltipAngle(coordinates);
  const tooltipArc = generateTooltipArc(angle);

  return (
    <path
      d={tooltipArc}
      fill={gray[800]}
      fillOpacity={tooltipArcOpacity}
      pointerEvents="none"
      className="mix-blend-multiply"
    />
  );
}
