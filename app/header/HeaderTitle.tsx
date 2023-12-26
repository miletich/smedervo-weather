import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import Link from 'next/link';

import { colorScheme } from '../../styles/tokens.stylex';
import { generic } from '@/styles/generic';

type Props = ComponentProps<'a'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLAnchorElement, Props>(function HeaderTitle(
  { styleX, ...rest },
  ref
) {
  return (
    <Link
      href="/"
      {...stylex.props(generic.headerHover, styleX)}
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
  first: {
    fontWeight: 700,
  },
  second: {
    fontWeight: 400,
  },
});
