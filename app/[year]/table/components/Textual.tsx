import { type ComponentProps, forwardRef } from 'react';

import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { TableCell } from '@/components/Table';

import { tableComponentStyles } from './tableComponentStyles';

type Props = ComponentProps<'td'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableCellElement, Props>(function Textual(
  { styleX, children, ...rest },
  ref
) {
  return (
    <TableCell
      styleX={[tableComponentStyles.startAlign, styleX]}
      {...rest}
      ref={ref}
    >
      {children}
    </TableCell>
  );
});
