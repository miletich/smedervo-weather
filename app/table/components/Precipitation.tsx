import { type ComponentProps, forwardRef } from 'react';
import { WiRain, WiSnow, WiSleet } from 'weather-icons-react';

import Svg from '@/components/Svg';
import { PrecipitationType } from '@/utils/data';
import { darkGray, precipitationSize } from '../consts';

type Props = ComponentProps<'svg'> & {
  type: Exclude<PrecipitationType, undefined>;
};

const componentMap = {
  rain: WiRain,
  snow: WiSnow,
  sleet: WiSleet,
} as const;

export default function Precipitation({
  className = '',
  type,
  ...rest
}: Props) {
  const Component = componentMap[type];
  return <Component size={precipitationSize} color={darkGray} {...rest} />;
}
