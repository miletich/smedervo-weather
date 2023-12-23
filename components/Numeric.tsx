import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

type Props = ComponentProps<'span'> & { style?: StyleXStyles };

export default forwardRef<HTMLSpanElement, Props>(function Numeric(
  { style, children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      {...stylex.props(styles.numbers, style as StyleXStyles)}
      {...rest}
    >
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
