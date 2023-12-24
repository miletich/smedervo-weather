import { type ComponentProps, forwardRef } from 'react';
import { scaleSequential } from 'd3';
import { interpolateTurbo } from 'd3-scale-chromatic';

import type { StyleXStyles } from '@stylexjs/stylex';

import Numeric from '@/components/Numeric';
import { TableCell } from '@/components/Table';

import { tableComponentStyles } from './tableComponentStyles';

type Props = ComponentProps<'td'> & {
  temperature: number;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function MaxTemp(
  { styleX, temperature, ...rest },
  ref
) {
  const scale = scaleSequential()
    .domain([-15, 40])
    .interpolator(interpolateTurbo);

  return (
    <TableCell
      styleX={[tableComponentStyles.gradientWrapper, styleX]}
      style={{ backgroundColor: scale(temperature) }}
      {...rest}
      ref={ref}
    >
      <Numeric styleX={tableComponentStyles.numbers}>
        {temperature.toFixed(1)}
      </Numeric>
    </TableCell>
  );
});
