import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { tableStyles } from './styles';

type Props = ComponentProps<'table'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableElement, Props>(function Table(
  { styleX, children, ...rest },
  ref
) {
  return (
    <table ref={ref} {...stylex.props([tableStyles.wrapper, styleX])} {...rest}>
      {children}
    </table>
  );
});
