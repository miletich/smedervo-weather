import { darkGray, tooltipArcOpacity } from '../consts';
import { type Coordinates } from './eventHandlers';
import { generateTooltipArc, useTooltipAngle } from './utils';

type Props = {
  coordinates: Exclude<Coordinates, null>;
};

export default function TooltipArc({ coordinates }: Props) {
  const angle = useTooltipAngle(coordinates);
  const tooltipArc = generateTooltipArc(angle);
  console.log({ angle, tooltipArc });

  return (
    <path
      d={tooltipArc}
      fill={darkGray}
      fillOpacity={tooltipArcOpacity}
      pointerEvents="none"
      className="mix-blend-multiply"
    />
  );
}
