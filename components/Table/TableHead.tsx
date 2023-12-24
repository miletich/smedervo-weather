import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';
import { tableStyles } from './styles';

type Props = ComponentProps<'th'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { style, children, ...rest },
  ref
) {
  return (
    <th
      ref={ref}
      {...stylex.props(tableStyles.cell, style as StyleXStyles)}
      {...rest}
    >
      {children}
    </th>
  );
});
