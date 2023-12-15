import { type ComponentProps, forwardRef } from 'react';

import Svg from '@/components/Svg';

import { uvIndexBarWidth } from '../../consts';

import { getUvIndexConfig } from './utils';

type Props = { uvIndex: number } & ComponentProps<'svg'>;

export default forwardRef<SVGSVGElement, Props>(function UvIndex(
  { className = '', uvIndex, ...rest },
  ref
) {
  const { name, value, color, width, height, barXBase } =
    getUvIndexConfig(uvIndex);

  return (
    <Svg
      className={`${className} w-24 h-6`}
      {...rest}
      width={width}
      height={height}
      ref={ref}
      fill={color}
      preserveAspectRatio="xMinYMin meet"
      role="image"
    >
      <title>{`UV Index: ${name} - ${value}`}</title>
      {new Array(value).fill(0).map((_, i) => (
        <rect
          key={name}
          x={i * barXBase}
          y={0}
          width={uvIndexBarWidth}
          height={height}
        />
      ))}
    </Svg>
  );
});
