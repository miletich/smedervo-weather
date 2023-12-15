import { type ComponentProps, forwardRef } from 'react';

import Svg from '@/components/Svg';

import { daylightHeight, daylightWidth } from '../../consts';

type Props = ComponentProps<'svg'> & {
  date: Date;
};

export default forwardRef<SVGSVGElement, Props>(function daylight(
  { className = '', date, ...rest },
  ref
) {
  return (
    <Svg
      className={` ${className}`}
      {...rest}
      ref={ref}
      width={daylightWidth}
      height={daylightHeight}
    ></Svg>
  );
});
