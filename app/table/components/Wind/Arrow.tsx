import { type ComponentProps, forwardRef } from 'react';

import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import Svg from '@/components/Svg';
import { gray } from '@/styles/tokens.stylex';

type Props = ComponentProps<'svg'> & {
  direction: number;
  styleX?: StyleXStyles;
};

const size = 4;

export default forwardRef<SVGSVGElement, Props>(function Arrow(
  { direction, styleX, ...rest },
  ref
) {
  const d = `
    M 2,0
    L 3,4
    L 2,3
    L 1,4
    L 2,0z
  `;

  return (
    <Svg
      {...stylex.props(styleX)}
      {...rest}
      width={size}
      height={size}
      ref={ref}
    >
      <path
        d={d}
        transform={`rotate(${direction} ${size / 2} ${size / 2})`}
        rotate={direction}
        fill={gray[600]}
      />
    </Svg>
  );
});
