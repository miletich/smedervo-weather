import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { blue } from '@/styles/tokens.stylex';

type Props = ComponentProps<'rect'> & { style?: StyleXStyles };

export default forwardRef<SVGRectElement, Props>(function HoverLine(
  { style, ...rest },
  ref
) {
  return (
    <rect ref={ref} fill={blue[300]} {...stylex.props(styles.line)} {...rest} />
  );
});

const styles = stylex.create({
  line: {
    mixBlendMode: 'color-burn',
    transition: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: 200,
  },
});
