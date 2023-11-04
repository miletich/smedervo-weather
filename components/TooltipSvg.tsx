import { gray } from '@/utils/consts';
import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'path'> &
  Record<'width' | 'height' | 'offset', number>;

export default forwardRef<SVGPathElement, Props>(function TooltipSvg(
  { className = '', width, height, offset, ...rest },
  ref
) {
  const left = -width / 2;
  const right = width / 2;
  const bottom = -offset;
  const top = -height - offset;
  const d = `M 0,0
    L ${-offset},${bottom}
    H ${left}
    V ${top}
    H ${right}
    V ${bottom}
    H ${offset}
    L 0,0z
  `;

  return (
    <path
      ref={ref}
      className={`${className}`}
      d={d}
      stroke={gray}
      strokeWidth={1}
      fill="white"
      {...rest}
    />
  );
});
