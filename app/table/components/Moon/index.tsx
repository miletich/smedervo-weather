import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { gray } from '@/styles/tokens.stylex';

import { moonSize } from '../../consts';
import MoonSvgBody from './MoonSvgBody';

type Props = ComponentProps<'td'> & {
  date: Date;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Moon(
  { styleX, children, date, ...rest },
  ref
) {
  const { fraction } = SunCalc.getMoonIllumination(date);

  return (
    <TableCell styleX={[styles.wrapper, styleX]} {...rest} ref={ref}>
      <Svg width={moonSize} height={moonSize} {...stylex.props(styles.moon)}>
        <title>{`Moon illumination: ${fraction}%`}</title>
        <MoonSvgBody date={date} />
      </Svg>
    </TableCell>
  );
});

const styles = stylex.create({
  wrapper: {
    width: 86,
    paddingEnd: '1.5rem',
  },
  moon: {
    width: '2rem',
    height: '2rem',
  },
});
