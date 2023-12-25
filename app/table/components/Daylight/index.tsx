import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';

import { daylightHeight, daylightWidth } from '../../consts';

import DayLightSvgBody from './DayLightSvgBody';

type Props = ComponentProps<'td'> & {
  date: Date;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Daylight(
  { styleX, date, ...rest },
  ref
) {
  return (
    <TableCell styleX={[styles.wrapper, styleX]} {...rest} ref={ref}>
      <Svg
        {...stylex.props(styles.graphic)}
        width={daylightWidth}
        height={daylightHeight}
        role="image"
      >
        <title>Daylight Overview</title>
        <DayLightSvgBody date={date} />
      </Svg>
    </TableCell>
  );
});

const styles = stylex.create({
  wrapper: {
    paddingStart: '1.5rem',
  },
  graphic: {
    width: '8rem',
    height: '2.5rem',
  },
});
