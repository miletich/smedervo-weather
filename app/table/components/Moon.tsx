import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';

import Svg from '@/components/Svg';
import { gray } from '@/app/scatter-plot/consts';
import { moonSize } from '../consts';

type Props = ComponentProps<'svg'> & {
  date: Date;
  idx: string;
};

export default forwardRef<SVGSVGElement, Props>(function Moon(
  { className = '', children, idx, date, fill = gray, ...rest },
  ref
) {
  const maskId = `moon-${idx}`;
  const r = moonSize / 2;
  const { fraction } = SunCalc.getMoonIllumination(date);
  const x = moonSize * fraction;

  return (
    <Svg
      className={` ${className}`}
      {...rest}
      ref={ref}
      width={moonSize}
      height={moonSize}
    >
      <mask id={maskId}>
        <circle cx={r} cy={r} r={r} fill="white" />
        <circle cx={x} cy={r} r={r} fill="black" />
      </mask>
      <circle cx={r} cy={r} r={r} mask={`url(#${maskId})`} fill={fill} />
    </Svg>
  );
});
