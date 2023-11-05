import { hoverLineColor } from '@/utils/consts';
import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'rect'>;

export default forwardRef<SVGRectElement, Props>(function HoverLine(
  { className = '', ...rest },
  ref
) {
  return (
    <rect
      ref={ref}
      className={`mix-blend-color-burn ${className}`}
      fill={hoverLineColor}
      {...rest}
    />
  );
});
