import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { colorScheme, sizing } from '../styles/tokens.stylex';

type Props = ComponentProps<'h2'> & { style?: StyleXStyles };

export default forwardRef<HTMLHeadingElement, Props>(function H2(
  { style, children, ...rest },
  ref
) {
  return (
    <h2 ref={ref} {...stylex.props(styles.h2, style as StyleXStyles)} {...rest}>
      {children}
    </h2>
  );
});

const styles = stylex.create({
  h2: {
    color: colorScheme.lightText,
    fontSize: sizing.h2Size,
    fontWeight: 700,
  },
});
