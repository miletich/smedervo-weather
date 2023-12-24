import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import Svg from './Svg';
import { Dimensions } from '@/utils/dimensions';

type Props = ComponentProps<'svg'> & {
  dimensions: Dimensions;
  styleX?: StyleXStyles;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { styleX, children, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      {...rest}
      {...stylex.props(styleX)}
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
