import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { colorScheme } from '../styles/tokens.stylex';

type Props = ComponentProps<'p'> & { style?: StyleXStyles };

export default forwardRef<HTMLParagraphElement, Props>(function P(
  { style, children, ...rest },
  ref
) {
  return (
    <p
      ref={ref}
      {...stylex.props([styles.text, style as StyleXStyles])}
      {...rest}
    >
      {children}
    </p>
  );
});

const styles = stylex.create({
  text: {
    color: colorScheme.lightText,
  },
});
