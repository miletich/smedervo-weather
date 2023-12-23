import { type ComponentProps, forwardRef } from 'react';
import { scaleLinear } from 'd3-scale';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { TableCell } from '@/components/Table';
import Numeric from '@/components/Numeric';
import { generic } from '@/styles/generic';
import { white, gray, colorScheme } from '../../../../styles/tokens.stylex';

import { Wind } from '../../utils/tableDef';

import Arrow from './Arrow';
import { tableComponentStyles } from '../tableComponentStyles';

type Props = ComponentProps<'td'> & {
  wind: Wind;
  windRange: [number, number];
  style?: StyleXStyles;
};

export default forwardRef<HTMLTableCellElement, Props>(function Wind(
  { style, wind, windRange, ...rest },
  ref
) {
  const scale = scaleLinear<string, string>()
    .domain(windRange)
    .range([white, gray[400]]);

  return (
    <TableCell
      style={{ backgroundColor: scale(wind.windspeed) }}
      {...rest}
      {...stylex.props(
        tableComponentStyles.gradientWrapper,
        styles.wrapper,
        style as StyleXStyles
      )}
      ref={ref}
    >
      <div {...stylex.props(generic.centerXY)}>
        <Arrow direction={wind.winddir} {...stylex.props(styles.arrow)} />
        <Numeric style={tableComponentStyles.numbers as any}>
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
