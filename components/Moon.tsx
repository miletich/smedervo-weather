import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';

import { gray } from '@/app/scatter-plot/consts';

import Svg from './Svg';

type Props = ComponentProps<'svg'> & {
  date: Date;
  idx: string;
  size?: number;
};

export default forwardRef<SVGSVGElement, Props>(function Moon(
  { className = '', children, idx, date, size = 100, fill = gray, ...rest },
  ref
) {
  const maskId = `moon-${idx}`;
  const r = size / 2;
  const { fraction } = SunCalc.getMoonIllumination(date);
  const x = size * fraction;

  return (
    <Svg
      className={` ${className}`}
      {...rest}
      ref={ref}
      width={size}
      height={size}
    >
      <mask id={maskId}>
        <circle cx={r} cy={r} r={r} fill="white" />
        <circle cx={x} cy={r} r={r} fill="black" />
      </mask>
      <circle cx={r} cy={r} r={r} mask={`url(#${maskId})`} fill={fill} />
    </Svg>
  );
});
