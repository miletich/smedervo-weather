import { type ComponentProps, forwardRef } from 'react';
import Svg from './Svg';
import { Dimensions } from '@/utils/dimensions';

type Props = ComponentProps<'svg'> & { dimensions: Dimensions };

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { className = '', children, dimensions, ...rest },
  ref
) {
  return (
    <Svg
      className={` ${className}`}
      {...rest}
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
