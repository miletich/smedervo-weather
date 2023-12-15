import { type ComponentProps, forwardRef } from 'react';

import Svg from '@/components/Svg';

import {
  daylightDayColor,
  daylightHeight,
  daylightMidColor,
  daylightNightColor,
  daylightWidth,
} from '../../consts';

import { getDaylightConfig } from './utils';

type Props = ComponentProps<'svg'> & {
  date: Date;
};

export default forwardRef<SVGSVGElement, Props>(function daylight(
  { className = '', date, ...rest },
  ref
) {
  const { dawn, sunrise, sunset, dusk } = getDaylightConfig(date);

  return (
    <Svg
      className={` ${className} w-32 h-10`}
      {...rest}
      ref={ref}
      width={daylightWidth}
      height={daylightHeight}
      role="image"
    >
      <title>Daylight Overview</title>
      <line
        x1={daylightHeight}
        x2={daylightWidth - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={daylightNightColor}
        strokeLinecap="round"
      />
      <line
        x1={dawn + daylightHeight}
        x2={dusk - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={daylightMidColor}
        strokeLinecap="round"
      />
      <line
        x1={sunrise + daylightHeight}
        x2={sunset - daylightHeight}
        y1={daylightHeight / 2}
        y2={daylightHeight / 2}
        strokeWidth={daylightHeight}
        stroke={daylightDayColor}
        strokeLinecap="round"
      />
    </Svg>
  );
});
