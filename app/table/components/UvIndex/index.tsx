import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';

import { uvIndexBarWidth } from '../../consts';

import { getUvIndexConfig } from './utils';

type Props = { uvIndex: number; style?: StyleXStyles } & ComponentProps<'td'>;

export default forwardRef<HTMLTableCellElement, Props>(function UvIndex(
  { style, uvIndex, ...rest },
  ref
) {
  const { name, value, color, width, height, barXBase } =
    getUvIndexConfig(uvIndex);

  return (
    <TableCell
      style={[styles.wrapper, style as StyleXStyles]}
      {...rest}
      ref={ref}
    >
      <Svg
        {...stylex.props(styles.graphic)}
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

const styles = stylex.create({
  wrapper: {
    paddingStart: '1.5rem',
  },
  graphic: {
    width: '6rem',
    height: '1.5rem',
  },
});
