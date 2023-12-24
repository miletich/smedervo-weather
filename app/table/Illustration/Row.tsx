import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { illustrationStyles } from './illustrationStyles';
import {
  dimensions,
  rowHeight,
  textHeight,
  offset,
  textRx,
  textWidth,
  daylightX,
  daylightY,
  dayLightScale,
} from './consts';
import DayLightSvgBody from '../components/Daylight/DayLightSvgBody';

type Props = ComponentProps<'g'> & {
  date: Date;
  idx: number;
  styleX?: StyleXStyles;
};

export default forwardRef<SVGGElement, Props>(function Row(
  { date, styleX, idx, ...rest },
  ref
) {
  return (
    <g ref={ref} {...rest} transform={`translate(0, ${rowHeight * idx})`}>
      <rect
        className="bg"
        width={dimensions.innerWidth}
        height={rowHeight}
        {...stylex.props(illustrationStyles.rowBg(idx % 2 === 0), styleX)}
      />
      <rect
        className="text"
        x={offset}
        y={offset}
        width={textWidth}
        height={textHeight}
        rx={textRx}
        {...stylex.props(illustrationStyles.rowText)}
      />
      <DayLightSvgBody
        date={date}
        transform={`translate(${daylightX}, ${daylightY}) scale(${dayLightScale})`}
      />
    </g>
  );
});
