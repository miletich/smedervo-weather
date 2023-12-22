import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { gray, tooltip } from '../../../../styles/tokens.stylex';

import { type ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'path'> &
  Record<'width' | 'height' | 'offset', number> & { style?: StyleXStyles };

export default forwardRef<SVGPathElement, Props>(function TooltipSvg(
  { style, width, height, offset, ...rest },
  ref
) {
  const left = -width / 2;
  const right = width / 2;
  const bottom = -offset;
  const top = -height - offset;
  const d = `M 0,0
    L ${-offset},${bottom}
    H ${left}
    V ${top}
    H ${right}
    V ${bottom}
    H ${offset}
    L 0,0z
  `;

  return (
    <path
      ref={ref}
      d={d}
      {...stylex.props([styles.wrapper, style as StyleXStyles])}
      {...rest}
    />
  );
});

const styles = stylex.create({
  wrapper: {
    fill: tooltip.wrapperFill,
    stroke: tooltip.wrapperStroke,
  },
});
