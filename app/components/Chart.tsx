import { type ComponentProps, forwardRef } from 'react';
import Svg from './Svg';

type Props = ComponentProps<'svg'> & {
  width: number;
  height: number;
};

export default forwardRef<SVGSVGElement, Props>(function Chart(
  { className = '', children, width, height, ...rest },
  ref
) {
  return (
    <Svg
      className={` ${className}`}
      width={width}
      height={height}
      {...rest}
      ref={ref}
    >
      {children}
    </Svg>
  );
});
