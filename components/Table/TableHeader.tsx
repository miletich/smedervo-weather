import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { tableStyles } from './styles';

type Props = ComponentProps<'thead'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  { styleX, children, ...rest },
  ref
) {
  return (
    <thead ref={ref} {...stylex.props([tableStyles.header, styleX])} {...rest}>
      {children}
    </thead>
  );
});
