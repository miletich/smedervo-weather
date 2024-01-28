import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

import { peripheralsStyles } from '@/styles/peripherals';

import { getCoordinatesForAngle } from '../../utils/angle';
import {
  annotationOpacity,
  annotationTextSize,
  annotationTextXOffset,
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
        opacity={annotationOpacity}
        {...stylex.props(peripheralsStyles.gridLine)}
      />
      <text
        x={x2}
        dx={annotationTextXOffset}
        y={y2}
        dominantBaseline="middle"
        fontSize={annotationTextSize}
        {...stylex.props(peripheralsStyles.axisValue)}
      >
        {children}
      </text>
    </g>
  );
}
