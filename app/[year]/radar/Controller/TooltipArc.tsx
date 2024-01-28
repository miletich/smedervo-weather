import * as stylex from '@stylexjs/stylex';
import { tooltip } from '../../../../styles/tokens.stylex';

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
      fillOpacity={tooltipArcOpacity}
      {...stylex.props(styles.arc)}
    />
  );
}

const styles = stylex.create({
  arc: {
    fill: tooltip.arcFill,
    mixBlendMode: tooltip.arcBlendMode,
    pointerEvents: 'none',
  },
});
