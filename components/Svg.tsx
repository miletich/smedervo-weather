import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'svg'> & {
  width: number;
  height: number;
};

export default forwardRef<SVGSVGElement, Props>(function Svg(
  { children, width, height, ...rest },
  ref
) {
  return (
    <svg ref={ref} viewBox={`0 0 ${width} ${height}`} {...rest}>
      {children}
    </svg>
  );
});
