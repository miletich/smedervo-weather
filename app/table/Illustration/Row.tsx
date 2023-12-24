import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { illustrationStyles } from './illustrationStyles';
import { dimensions, rowHeight } from './consts';

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
    <g
      ref={ref}
      {...rest}
      {...stylex.props(illustrationStyles.rowBg(idx % 2 === 0), styleX)}
    >
      <rect
        x={0}
        y={rowHeight * idx + rowHeight}
        width={dimensions.innerWidth}
        height={rowHeight}
      />
    </g>
  );
});
