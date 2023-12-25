import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { tableStyles } from './styles';

type Props = ComponentProps<'th'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { styleX, children, ...rest },
  ref
) {
  return (
    <th ref={ref} {...stylex.props(tableStyles.cell, styleX)} {...rest}>
      {children}
    </th>
  );
});
