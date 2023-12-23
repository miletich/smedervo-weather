import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { tableStyles } from './styles';

type Props = ComponentProps<'tr'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { style, children, ...rest },
  ref
) {
  return (
    <tr
      ref={ref}
      {...stylex.props([tableStyles.rowBackground, style as StyleXStyles])}
      {...rest}
    >
      {children}
    </tr>
  );
});
