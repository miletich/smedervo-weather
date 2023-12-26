import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { colorScheme } from '../styles/tokens.stylex';

type Props = ComponentProps<'p'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLParagraphElement, Props>(function P(
  { styleX, children, ...rest },
  ref
) {
  return (
    <p ref={ref} {...stylex.props([styles.text, styleX])} {...rest}>
      {children}
    </p>
  );
});

const styles = stylex.create({
  text: {
    color: colorScheme.text,
  },
});
