import { type ComponentProps, forwardRef } from 'react';

import Svg from '@/components/Svg';
import { gray } from '@/styles/colors';

type Props = ComponentProps<'svg'> & {
  direction: number;
};

const size = 4;

export default forwardRef<SVGSVGElement, Props>(function Arrow(
  { className = '', direction, ...rest },
  ref
) {
  const d = `
    M 2,0
    L 3,4
    L 2,3
    L 1,4
    L 2,0z
  `;

  return (
    <Svg
      className={` ${className}`}
      {...rest}
      width={size}
      height={size}
      ref={ref}
    >
      <path
        d={d}
        transform={`rotate(${direction} ${size / 2} ${size / 2})`}
        rotate={direction}
        fill={gray[600]}
      />
    </Svg>
  );
});
