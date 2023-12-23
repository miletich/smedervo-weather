import { type ComponentProps, forwardRef } from 'react';
import { scaleSequential } from 'd3';
import { interpolateTurbo } from 'd3-scale-chromatic';

import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import Numeric from '@/components/Numeric';
import { TableCell } from '@/components/Table';

import { tableComponentStyles } from './tableComponentStyles';

type Props = ComponentProps<'td'> & {
  temperature: number;
};

export default forwardRef<HTMLTableCellElement, Props>(function MaxTemp(
  { style, temperature, ...rest },
  ref
) {
  const scale = scaleSequential()
    .domain([-15, 40])
    .interpolator(interpolateTurbo);

  return (
    <TableCell
      style={[tableComponentStyles.gradientWrapper, style as StyleXStyles]}
      rawStyle={{ backgroundColor: scale(temperature) }}
      {...rest}
      ref={ref}
    >
      {/** TODO: fix */}
      <Numeric style={tableComponentStyles.numbers as any}>
        {temperature.toFixed(1)}
      </Numeric>
    </TableCell>
  );
});
