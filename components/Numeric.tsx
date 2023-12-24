import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type Props = ComponentProps<'span'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLSpanElement, Props>(function Numeric(
  { styleX, children, ...rest },
  ref
) {
  return (
    <span ref={ref} {...stylex.props(styles.numbers, styleX)} {...rest}>
      {children}
    </span>
  );
});

const styles = stylex.create({
  numbers: {
    display: 'block',
    textAlign: 'end',
    fontVariantNumeric: 'tabular-nums',
  },
});
