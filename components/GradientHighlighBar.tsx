import { gradientHeight, gradientHighlightWidth } from '@/utils/consts';
import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'rect'>;

export default forwardRef<SVGRectElement, Props>(function GradientHighlighBar(
  { className = '', ...rest },
  ref
) {
  return (
    <rect
      ref={ref}
      className={`pointer-events-none ${className}`}
      width={gradientHighlightWidth}
      height={gradientHeight}
      {...rest}
    />
  );
});
