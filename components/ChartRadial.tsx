import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { RadialDimensions } from '@/utils/dimensions';

import Svg from './Svg';

type Props = ComponentProps<'svg'> & {
  dimensions: RadialDimensions;
  styleX?: StyleXStyles;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { children, styleX, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      {...rest}
      {...stylex.props(styleX)}
      width={dimensions.size}
      height={dimensions.size}
      ref={ref}
    >
      <g
        transform={`translate(${dimensions.margin + dimensions.radius}, ${
          dimensions.margin + dimensions.radius
        })`}
      >
        {children}
      </g>
    </Svg>
  );
});
