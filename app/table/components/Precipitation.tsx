import { type ComponentProps, forwardRef } from 'react';
import { WiRain, WiSnow, WiSleet } from 'weather-icons-react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { PrecipitationType } from '@/utils/data';
import { gray } from '@/styles/tokens.stylex';

import { precipitationSize } from '../consts';

type Props = ComponentProps<'td'> & {
  type: PrecipitationType;
  styleX?: StyleXStyles;
};

const componentMap = {
  rain: WiRain,
  snow: WiSnow,
  sleet: WiSleet,
} as const;

export default forwardRef<HTMLTableCellElement, Props>(function Precipitation(
  { styleX, type, ...rest },
  ref
) {
  if (!type) return <TableCell />;

  const Component = componentMap[type];

  return (
    <TableCell styleX={[styles.wrapper, styleX]}>
      <Component size={precipitationSize} color={gray[400]} {...rest} />
    </TableCell>
  );
});

const styles = stylex.create({
  wrapper: {
    width: 82,
    paddingEnd: '1rem',
  },
});
