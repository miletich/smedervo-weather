import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';

import { TableCell } from '@/components/Table';
import Numeric from '@/components/Numeric';

import { Wind } from '../../utils/tableDef';
import { darkGray, white } from '../../consts';

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
    .range([white, darkGray]);

  return (
    <TableCell
      className={`${className}`}
      style={{ backgroundColor: scale(wind.windspeed) }}
      {...rest}
      ref={ref}
    >
      <div className="flex justify-between items-center">
        <Arrow direction={wind.winddir} className="w-5 h-5 me-2" />
        <Numeric>{wind.windspeed.toFixed(2)}</Numeric>
      </div>
    </TableCell>
  );
});
