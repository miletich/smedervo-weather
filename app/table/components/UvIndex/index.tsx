import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';
import Svg from '@/components/Svg';

import { getUvIndexConfig } from './utils';
import UvIndexSvgBody from './UvIndexSvgBody';

type Props = { uvIndex: number; styleX?: StyleXStyles } & ComponentProps<'td'>;

export default forwardRef<HTMLTableCellElement, Props>(function UvIndex(
  { styleX, uvIndex, ...rest },
  ref
) {
  const { value, width, height } = getUvIndexConfig(uvIndex);

  return (
    <TableCell styleX={[styles.wrapper, styleX]} {...rest} ref={ref}>
      <Svg
        {...stylex.props(styles.graphic)}
        width={width}
        height={height}
        preserveAspectRatio="xMinYMin meet"
        role="image"
      >
        <title>{`UV Index: ${value}`}</title>
        <UvIndexSvgBody uvIndex={uvIndex} />
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
