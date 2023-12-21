import { type ComponentProps, forwardRef } from 'react';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { daylightDayColor, blue } from '@/consts/colors';

import { daylightHeight, daylightWidth } from '../../consts';

import { getDaylightConfig } from './utils';

type Props = ComponentProps<'td'> & {
  date: Date;
};

export default forwardRef<HTMLTableCellElement, Props>(function Daylight(
  { className = '', date, ...rest },
  ref
) {
  const { dawn, sunrise, sunset, dusk } = getDaylightConfig(date);

  return (
    <TableCell className={` ${className} w-32 h-10`} {...rest} ref={ref}>
      <Svg
        className={` w-32 h-10`}
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
          stroke={daylightDayColor}
          strokeLinecap="round"
        />
      </Svg>
    </TableCell>
  );
});
