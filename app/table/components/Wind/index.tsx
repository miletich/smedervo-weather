import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { TableCell } from '@/components/Table';
import Numeric from '@/components/Numeric';
import { white, gray } from '@/styles/tokens.stylex';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';
import { tableComponentStyles } from '../tableComponentStyles';

type Props = ComponentProps<'td'> & {
  wind: Wind;
  windRange: [number, number];
  style?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Wind(
  { className = '', style, wind, windRange, ...rest },
  ref
) {
  const scale = scaleLinear<string, string>()
    .domain(windRange)
    .range([white, gray[400]]);

  return (
    <TableCell
      className={`${className}`}
      style={{ backgroundColor: scale(wind.windspeed) }}
      {...stylex.props(style as StyleXStyles)}
      {...rest}
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Arrow direction={wind.winddir} className="h-5 me-2" />
        <Numeric style={tableComponentStyles.numbers as any}>
          {wind.windspeed.toFixed(2)}
        </Numeric>
      </div>
    </TableCell>
  );
});
