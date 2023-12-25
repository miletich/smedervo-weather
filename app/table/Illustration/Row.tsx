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
  moonX,
  moonY,
  moonScale,
  uvIndexX,
  uvIndexY,
  uvIndexScale,
} from './consts';
import DayLightSvgBody from '../components/Daylight/DayLightSvgBody';
import MoonSvgBody from '../components/Moon/MoonSvgBody';
import UvIndexSvgBody from '../components/UvIndex/UvIndexSvgBody';
import { uvIndexAccessor } from '@/utils/data';

type Props = ComponentProps<'g'> & {
  date: Date;
  uvIndex: number;
  idx: number;
  styleX?: StyleXStyles;
};

export default forwardRef<SVGGElement, Props>(function Row(
  { date, uvIndex, styleX, idx, ...rest },
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
        width={textWidth / 2 + (textWidth / 2) * Math.random()}
        height={textHeight}
        rx={textRx}
        {...stylex.props(illustrationStyles.rowText)}
      />
      <DayLightSvgBody
        date={date}
        transform={`translate(${daylightX}, ${daylightY}) scale(${dayLightScale})`}
      />
      <MoonSvgBody
        date={date}
        transform={`translate(${moonX}, ${moonY}) scale(${moonScale})`}
      />
      <UvIndexSvgBody
        uvIndex={uvIndex}
        transform={`translate(${uvIndexX}, ${uvIndexY}) scale(${uvIndexScale})`}
      />
    </g>
  );
});
