import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { tableStyles } from './styles';

type Props = ComponentProps<'thead'> & { style?: StyleXStyles };

export default forwardRef<HTMLTableSectionElement, Props>(function TableHeader(
  { style, children, ...rest },
  ref
) {
  return (
    <thead
      ref={ref}
      {...stylex.props([tableStyles.header, style as StyleXStyles])}
      {...rest}
    >
      {children}
    </thead>
  );
});
