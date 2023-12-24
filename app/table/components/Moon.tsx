import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { gray } from '@/styles/tokens.stylex';

import { moonSize } from '../consts';

type Props = ComponentProps<'td'> & {
  date: Date;
  idx: string;
  fill?: string;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Moon(
  { styleX, children, idx, date, fill = gray[400], ...rest },
  ref
) {
  const maskId = `moon-${idx}`;
  const r = moonSize / 2;
  const { fraction } = SunCalc.getMoonIllumination(date);
  const x = moonSize * fraction;

  return (
    <TableCell styleX={[styles.wrapper, styleX]} {...rest} ref={ref}>
      <Svg width={moonSize} height={moonSize} {...stylex.props(styles.moon)}>
        <title>{`Moon illumination: ${fraction}%`}</title>
        <mask id={maskId}>
          <circle cx={r} cy={r} r={r} fill="white" />
          <circle cx={x} cy={r} r={r} fill="black" />
        </mask>
        <circle cx={r} cy={r} r={r} mask={`url(#${maskId})`} fill={fill} />
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
    opacity: 0.7,
  },
});
