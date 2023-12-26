import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { colorScheme, sizing } from '../styles/tokens.stylex';

type Props = ComponentProps<'h2'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLHeadingElement, Props>(function H2(
  { styleX, children, ...rest },
  ref
) {
  return (
    <h2 ref={ref} {...stylex.props(styles.h2, styleX)} {...rest}>
      {children}
    </h2>
  );
});

const styles = stylex.create({
  h2: {
    color: colorScheme.text,
    fontSize: sizing.h2Size,
    fontWeight: 700,
  },
});
