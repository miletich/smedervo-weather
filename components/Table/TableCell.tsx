import { type ComponentProps, type CSSProperties, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type {
  StyleXArray,
  StyleXStyles,
} from '@stylexjs/stylex/lib/StyleXTypes';
import { tableStyles } from './styles';

type Props = ComponentProps<'td'> & {
  styleX?: StyleXArray<any>;
  style?: CSSProperties;
};

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { styleX, style, children, ...rest },
  ref
) {
  return (
    <td
      ref={ref}
      style={style}
      {...stylex.props(tableStyles.cell, styles.overrides, styleX)}
      {...rest}
    >
      {children}
    </td>
  );
});

const styles = stylex.create({
  overrides: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
});
