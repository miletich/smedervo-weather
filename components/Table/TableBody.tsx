import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

type Props = ComponentProps<'tbody'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableSectionElement, Props>(function TableBody(
  { children, style, ...rest },
  ref
) {
  return (
    <tbody ref={ref} {...stylex.props(style as StyleXStyles)} {...rest}>
      {children}
    </tbody>
  );
});
