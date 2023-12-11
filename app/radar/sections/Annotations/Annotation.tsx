import { type PropsWithChildren } from 'react';

import { getCoordinatesForAngle } from '../../utils/angle';
import {
  annotationOpacity,
  annotationTextSize,
  annotationTextXOffset,
  black,
} from '../../consts';

type Props = PropsWithChildren<
  Record<'innerOffset' | 'outerOffset' | 'angle', number>
>;

export default function Annotation({
  children,
  angle,
  innerOffset,
  outerOffset,
}: Props) {
  const [x1, y1] = getCoordinatesForAngle(angle, innerOffset);
  const [x2, y2] = getCoordinatesForAngle(angle, outerOffset);

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={black}
        opacity={annotationOpacity}
      />
      <text
        x={x2}
        dx={annotationTextXOffset}
        y={y2}
        dominantBaseline="middle"
        fontSize={annotationTextSize}
      >
        {children}
      </text>
    </g>
  );
}