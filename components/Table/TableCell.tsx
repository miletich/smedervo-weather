import { type ComponentProps, type CSSProperties, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type {
  StyleXArray,
  StyleXStyles,
} from '@stylexjs/stylex/lib/StyleXTypes';
import { tableStyles } from './styles';

type Props = ComponentProps<'td'> & {
  style?: StyleXArray<any>;
  rawStyle?: CSSProperties;
};

export default forwardRef<HTMLTableCellElement, Props>(function TableHead(
  { style, rawStyle, children, ...rest },
  ref
) {
  return (
    <td
      ref={ref}
      style={rawStyle}
      {...stylex.props(
        tableStyles.cell,
        styles.overrides,
        style as StyleXStyles
      )}
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
