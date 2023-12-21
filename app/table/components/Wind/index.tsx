import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';

import { TableCell } from '@/components/Table';
import Numeric from '@/components/Numeric';
import { white, zinc } from '@/consts/colors';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';

type Props = ComponentProps<'td'> & {
  wind: Wind;
  windRange: [number, number];
};

export default forwardRef<HTMLTableCellElement, Props>(function Wind(
  { className = '', wind, windRange, ...rest },
  ref
) {
  const scale = scaleLinear<string, string>()
    .domain(windRange)
    .range([white, zinc[400]]);

  return (
    <TableCell
      className={`${className}`}
      style={{ backgroundColor: scale(wind.windspeed) }}
      {...rest}
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Arrow direction={wind.winddir} className="h-5 me-2" />
        <Numeric>{wind.windspeed.toFixed(2)}</Numeric>
      </div>
    </TableCell>
  );
});
