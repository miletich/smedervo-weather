'use client';

import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { tableStyles } from '../styles';
import AnimatedRow from './AnimatedRow';

type Props = ComponentProps<'tr'> & {
  styleX?: StyleXStyles;
  animated?: boolean;
  idx?: number;
};

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { styleX, children, animated, idx, ...rest },
  ref
) {
  return animated ? (
    <AnimatedRow
      styleX={[tableStyles.rowBackground, styleX]}
      idx={idx}
      {...rest}
      ref={ref}
    >
      {children}
    </AnimatedRow>
  ) : (
    <tr
      ref={ref}
      {...stylex.props([tableStyles.rowBackground, styleX])}
      {...rest}
    >
      {children}
    </tr>
  );
});
