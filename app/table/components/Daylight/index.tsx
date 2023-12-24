import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { yellow, blue } from '@/styles/tokens.stylex';

import { daylightHeight, daylightWidth } from '../../consts';

import { getDaylightConfig } from './utils';

type Props = ComponentProps<'td'> & {
  date: Date;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Daylight(
  { styleX, date, ...rest },
  ref
) {
  const { dawn, sunrise, sunset, dusk } = getDaylightConfig(date);

  return (
    <TableCell styleX={[styles.wrapper, styleX]} {...rest} ref={ref}>
      <Svg
        {...stylex.props(styles.graphic)}
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
          stroke={yellow[200]}
          strokeLinecap="round"
        />
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
