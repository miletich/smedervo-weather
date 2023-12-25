import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { tableStyles } from './styles';

type Props = ComponentProps<'tr'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableRowElement, Props>(function TableRow(
  { styleX, children, ...rest },
  ref
) {
  return (
    <tr
      ref={ref}
      {...stylex.props([tableStyles.rowBackground, styleX])}
      {...rest}
    >
      {children}
    </tr>
  );
});
