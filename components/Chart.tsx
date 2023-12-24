import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import Svg from './Svg';
import { Dimensions } from '@/utils/dimensions';

type Props = ComponentProps<'svg'> & {
  dimensions: Dimensions;
  style?: StyleXStyles;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { style, children, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      {...rest}
      {...stylex.props(style as StyleXStyles)}
      width={dimensions.width}
      height={dimensions.height}
      ref={ref}
    >
      <g
        transform={`translate(${dimensions.margin.left}, ${dimensions.margin.top})`}
      >
        {children}
      </g>
    </Svg>
  );
});
