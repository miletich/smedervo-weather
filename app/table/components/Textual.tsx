import { type ComponentProps, forwardRef } from 'react';

import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { TableCell } from '@/components/Table';

import { tableComponentStyles } from './tableComponentStyles';

type Props = ComponentProps<'td'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableCellElement, Props>(function Textual(
  { style, children, ...rest },
  ref
) {
  return (
    <TableCell
      style={[tableComponentStyles.startAlign, style as StyleXStyles]}
      {...rest}
      ref={ref}
    >
      {children}
    </TableCell>
  );
});
