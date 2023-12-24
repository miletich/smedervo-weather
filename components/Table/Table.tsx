import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { tableStyles } from './styles';

type Props = ComponentProps<'table'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableElement, Props>(function Table(
  { style, children, ...rest },
  ref
) {
  return (
    <table
      ref={ref}
      {...stylex.props([tableStyles.wrapper, style as StyleXStyles])}
      {...rest}
    >
      {children}
    </table>
  );
});
