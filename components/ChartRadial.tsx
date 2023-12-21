import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';

import { RadialDimensions } from '@/utils/dimensions';

import Svg from './Svg';

type Props = ComponentProps<'svg'> & {
  dimensions: RadialDimensions;
  style?: stylex.StyleXStyles;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { className, children, style, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      className={` ${className}`}
      {...rest}
      // TODO: fix
      {...stylex.props(style as any)}
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
