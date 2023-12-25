import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { gray } from '@/styles/tokens.stylex';

import { moonSize } from '../../consts';

type Props = ComponentProps<'g'> & {
  date: Date;
  fill?: string;
  styleX?: StyleXStyles;
};

export default forwardRef<SVGGElement, Props>(function MoonSvgBody(
  { styleX, date, fill = gray[300], ...rest },
  ref
) {
  const maskId = `moon-${date.toISOString()}`;
  const r = moonSize / 2;
  const { fraction } = SunCalc.getMoonIllumination(date);
  const x = moonSize * fraction;

  return (
    <g {...stylex.props(styleX)} {...rest} ref={ref}>
      <mask id={maskId}>
        <circle cx={r} cy={r} r={r} fill="white" />
        <circle cx={x} cy={r} r={r} fill="black" />
      </mask>
      <circle cx={r} cy={r} r={r} mask={`url(#${maskId})`} fill={fill} />
    </g>
  );
});
