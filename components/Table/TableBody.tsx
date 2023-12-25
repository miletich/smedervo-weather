import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type Props = ComponentProps<'tbody'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableSectionElement, Props>(function TableBody(
  { children, styleX, ...rest },
  ref
) {
  return (
    <tbody ref={ref} {...stylex.props(styleX)} {...rest}>
      {children}
    </tbody>
  );
});
