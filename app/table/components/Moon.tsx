import { type ComponentProps, forwardRef } from 'react';
import * as SunCalc from 'suncalc';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { moonSize, gray } from '../consts';

type Props = ComponentProps<'td'> & {
  date: Date;
  idx: string;
  fill?: string;
};

export default forwardRef<HTMLTableCellElement, Props>(function Moon(
  { className = '', children, idx, date, fill = gray, ...rest },
  ref
) {
  const maskId = `moon-${idx}`;
  const r = moonSize / 2;
  const { fraction } = SunCalc.getMoonIllumination(date);
  const x = moonSize * fraction;

  return (
    <TableCell className={` ${className}`} {...rest} ref={ref}>
      <Svg width={moonSize} height={moonSize}>
        <title>{`Moon illumination: ${fraction}%`}</title>
        <mask id={maskId}>
          <circle cx={r} cy={r} r={r} fill="white" />
          <circle cx={x} cy={r} r={r} fill="black" />
        </mask>
        <circle cx={r} cy={r} r={r} mask={`url(#${maskId})`} fill={fill} />
      </Svg>
    </TableCell>
  );
});
