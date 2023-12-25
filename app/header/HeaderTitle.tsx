import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import Link from 'next/link';

type Props = ComponentProps<'div'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLDivElement, Props>(function HeaderTitle(
  { styleX, ...rest },
  ref
) {
  return (
    <div ref={ref} {...stylex.props(styleX)} {...rest}>
      <Link href="/">
        <h1>
          <span {...stylex.props(styles.first)}>SD</span>
          <span {...stylex.props(styles.second)}>Weather</span>
        </h1>
      </Link>
    </div>
  );
});

const styles = stylex.create({
  first: {
    fontWeight: 700,
  },
  second: {
    fontWeight: 400,
    textTransform: 'uppercase',
  },
});
