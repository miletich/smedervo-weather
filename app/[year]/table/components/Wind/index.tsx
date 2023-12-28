import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Numeric from '@/components/Numeric';
import { generic } from '@/styles/generic';
import { white, gray, colorScheme } from '../../../../../styles/tokens.stylex';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';
import { tableComponentStyles } from '../tableComponentStyles';

type Props = ComponentProps<'td'> & {
  wind: Wind;
  windRange: [number, number];
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Wind(
  { styleX, wind, windRange, ...rest },
  ref
) {
  const scale = scaleLinear<string, string>()
    .domain(windRange)
    .range([white, gray[400]]);

  return (
    <TableCell
      {...rest}
      style={{ backgroundColor: scale(wind.windspeed) }}
      styleX={[tableComponentStyles.gradientWrapper, styles.wrapper, styleX]}
      ref={ref}
    >
      <div {...stylex.props(generic.centerXY)}>
        <Arrow direction={wind.winddir} {...stylex.props(styles.arrow)} />
        <Numeric styleX={tableComponentStyles.numbers}>
          {wind.windspeed.toFixed(2)}
        </Numeric>
      </div>
    </TableCell>
  );
});

const styles = stylex.create({
  wrapper: {
    filter: colorScheme.invert,
  },
  arrow: {
    width: '1.25rem',
    height: '1.25rem',
    marginEnd: '0.5rem',
  },
});
