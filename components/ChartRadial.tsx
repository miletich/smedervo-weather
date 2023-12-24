import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { RadialDimensions } from '@/utils/dimensions';

import Svg from './Svg';

type Props = ComponentProps<'svg'> & {
  dimensions: RadialDimensions;
  style?: stylex.StyleXStyles;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { children, style, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      {...rest}
      {...stylex.props(style as StyleXStyles)}
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
