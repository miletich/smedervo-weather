import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';

import Numeric from '@/components/Numeric';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';
import { getWindRange } from './utilsServer';
import { darkGray, white } from '../../consts';
import { TableCell } from '@/components/Table';

type Props = ComponentProps<'td'> & {
  wind: Wind;
};

export default forwardRef<HTMLTableCellElement, Props>(async function wind(
  { className = '', wind, ...rest },
  ref
) {
  const windRange = await getWindRange();
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
        <span className="me-2">
          <Arrow direction={wind.winddir} className="w-5 h-5" />
        </span>
        <Numeric>{wind.windspeed.toFixed(2)}</Numeric>
      </div>
    </TableCell>
  );
});
