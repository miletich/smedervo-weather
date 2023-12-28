import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { uvIndexBarWidth } from '../../consts';

import { getUvIndexConfig } from './utils';

type Props = { uvIndex: number; styleX?: StyleXStyles } & ComponentProps<'g'>;

export default forwardRef<SVGGElement, Props>(function UvIndexSvgBody(
  { styleX, uvIndex, ...rest },
  ref
) {
  const { value, color, width, height, barXBase } = getUvIndexConfig(uvIndex);

  return (
    <g {...stylex.props(styleX)} {...rest} ref={ref}>
      {new Array(value).fill(0).map((_, i) => (
        <rect
          key={`uv-${i}`}
          x={i * barXBase}
          y={0}
          width={uvIndexBarWidth}
          height={height}
          fill={color}
        />
      ))}
    </g>
  );
});
