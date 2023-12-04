import { type ComponentProps, forwardRef } from 'react';

import { hoverLineColor } from '@/utils/consts';

type Props = ComponentProps<'rect'>;

export default forwardRef<SVGRectElement, Props>(function HoverLine(
  { className = '', ...rest },
  ref
) {
  return (
    <rect
      ref={ref}
      className={`mix-blend-color-burn transition-all duration-200 ease-out ${className}`}
      fill={hoverLineColor}
      {...rest}
    />
  );
});
