import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { yellow, blue } from '@/styles/tokens.stylex';

import { daylightHeight, daylightWidth } from '../../consts';

import { getDaylightConfig } from './utils';

type Props = ComponentProps<'g'> & {
  date: Date;
  styleX?: StyleXStyles;
};

export default (function DaylightSvgBody({ date, styleX, ...rest }: Props) {
  const { dawn, sunrise, sunset, dusk } = getDaylightConfig(date);
  return (
    <g {...stylex.props(styleX)} {...rest}>
      <line
        x1={daylightHeight}
        x2={daylightWidth - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={blue[900]}
        strokeLinecap="round"
      />
      <line
        x1={dawn + daylightHeight}
        x2={dusk - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={blue[400]}
        strokeLinecap="round"
      />
      <line
        x1={sunrise + daylightHeight}
        x2={sunset - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={yellow[200]}
        strokeLinecap="round"
      />
    </g>
  );
});
