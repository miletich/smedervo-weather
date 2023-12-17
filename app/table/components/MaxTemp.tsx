import { type ComponentProps, forwardRef } from 'react';
import { scaleSequential } from 'd3';
import { interpolateTurbo } from 'd3-scale-chromatic';

import Numeric from '@/components/Numeric';
import { TableCell } from '@/components/Table';

type Props = ComponentProps<'td'> & {
  temperature: number;
};

export default forwardRef<HTMLTableCellElement, Props>(function MaxTemp(
  { className = '', temperature, ...rest },
  ref
) {
  const scale = scaleSequential()
    .domain([-15, 40])
    .interpolator(interpolateTurbo);

  return (
    <TableCell
      className={`${className}`}
      style={{ backgroundColor: scale(temperature) }}
      {...rest}
      ref={ref}
    >
      <Numeric>{temperature.toFixed(1)}</Numeric>
    </TableCell>
  );
});
