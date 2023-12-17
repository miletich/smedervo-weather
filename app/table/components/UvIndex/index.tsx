import { type ComponentProps, forwardRef } from 'react';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';

import { uvIndexBarWidth } from '../../consts';

import { getUvIndexConfig } from './utils';

type Props = { uvIndex: number } & ComponentProps<'td'>;

export default forwardRef<HTMLTableCellElement, Props>(function UvIndex(
  { className = '', uvIndex, ...rest },
  ref
) {
  const { name, value, color, width, height, barXBase } =
    getUvIndexConfig(uvIndex);

  return (
    <TableCell className={`${className}`} {...rest} ref={ref}>
      <Svg
        className={` w-24 h-6`}
        width={width}
        height={height}
        fill={color}
        preserveAspectRatio="xMinYMin meet"
        role="image"
      >
        <title>{`UV Index: ${name} - ${value}`}</title>
        {new Array(value).fill(0).map((_, i) => (
          <rect
            key={`${name}-${i}`}
            x={i * barXBase}
            y={0}
            width={uvIndexBarWidth}
            height={height}
          />
        ))}
      </Svg>
    </TableCell>
  );
});
