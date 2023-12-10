import { type ComponentProps, forwardRef } from 'react';
import Svg from './Svg';
import { RadialDimensions } from '@/utils/dimensions';

type Props = ComponentProps<'svg'> & { dimensions: RadialDimensions };

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { className = '', children, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      className={` ${className}`}
      {...rest}
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
