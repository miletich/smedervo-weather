import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import Link from 'next/link';

import { colorScheme } from '../../styles/tokens.stylex';

type Props = ComponentProps<'a'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLAnchorElement, Props>(function HeaderTitle(
  { styleX, ...rest },
  ref
) {
  return (
    <Link
      href="/"
      {...stylex.props(styles.wrapper, styleX)}
      {...rest}
      ref={ref}
    >
      <h1>
        <span {...stylex.props(styles.first)}>SD</span>
        <span {...stylex.props(styles.second)}>Weather</span>
      </h1>
    </Link>
  );
});

const styles = stylex.create({
  wrapper: {
    color: colorScheme.text,
  },
  first: {
    fontWeight: 700,
  },
  second: {
    fontWeight: 400,
    textTransform: 'uppercase',
  },
});
