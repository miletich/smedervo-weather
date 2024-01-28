import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { peripherals } from '../../../../../styles/tokens.stylex';

type Props = ComponentProps<'rect'> & { styleX?: StyleXStyles };

export default forwardRef<SVGRectElement, Props>(function HoverLine(
  { styleX, ...rest },
  ref
) {
  return <rect ref={ref} {...stylex.props(styles.line)} {...rest} />;
});

const styles = stylex.create({
  line: {
    fill: peripherals.hoverLineFill,
    mixBlendMode: peripherals.hoverLineBlendMode, //'color-burn',
    transition: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: 200,
  },
});
