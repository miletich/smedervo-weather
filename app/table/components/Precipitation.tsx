import { type ComponentProps, forwardRef } from 'react';
import { WiRain, WiSnow, WiSleet } from 'weather-icons-react';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';
import { PrecipitationType } from '@/utils/data';
import { gray } from '@/styles/tokens.stylex';

import { precipitationSize } from '../consts';

type Props = ComponentProps<'td'> & {
  type: PrecipitationType;
};

const componentMap = {
  rain: WiRain,
  snow: WiSnow,
  sleet: WiSleet,
} as const;

export default forwardRef<HTMLTableCellElement, Props>(function Precipitation(
  { className = '', type, ...rest },
  ref
) {
  if (!type) return <TableCell />;

  const Component = componentMap[type];

  return (
    <TableCell className={`${className}`}>
      <Component size={precipitationSize} color={gray[400]} {...rest} />
    </TableCell>
  );
});
