import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';

import Numeric from '@/components/Numeric';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';
import { getWindRange } from './utilsServer';
import { darkGray, white } from '../../consts';

type Props = ComponentProps<'div'> & {
  wind: Wind;
};

export default forwardRef<HTMLDivElement, Props>(async function wind(
  { className = '', wind, ...rest },
  ref
) {
  const windRange = await getWindRange();
  const scale = scaleLinear<string, string>()
    .domain(windRange)
    .range([white, darkGray]);

  return (
    <div
      ref={ref}
      className={`${className}  h-12 flex justify-between items-center px-2`}
      {...rest}
      style={{ backgroundColor: scale(wind.windspeed) }}
    >
      <span className="me-2">
        <Arrow direction={wind.winddir} className="w-5 h-5" />
      </span>
      <Numeric>{wind.windspeed.toFixed(2)}</Numeric>
    </div>
  );
});
