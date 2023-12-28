import { type ComponentProps, forwardRef } from 'react';
import Link from 'next/link';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { buildQueryString } from '../searchParams';

import {
  TablePagerConfig,
  getHasNextOffset,
  getHasPreviousOffset,
} from './utils';
import { styles } from './styles';

type Props = ComponentProps<'a'> & {
  config: TablePagerConfig;
  path: string;
  children: string;
  styleX?: StyleXStyles;
};

export default forwardRef<HTMLAnchorElement, Props>(function Nav(
  { styleX, children: label, config, path, ...rest },
  ref
) {
  const { count, offset, limit } = config;

  if (label === '<') {
    const hasPreviousOffset = getHasPreviousOffset(offset);
    const href = `/${path}/${buildQueryString({
      offset: offset - limit,
      limit,
    })}`;

    return hasPreviousOffset ? (
      <Link
        href={href}
        {...rest}
        {...stylex.props([styles.item, styleX])}
        ref={ref}
      >
        {label}
      </Link>
    ) : (
      <span {...stylex.props(styles.disabledItem)}>{label}</span>
    );
  } else {
    const hasNextOffset = getHasNextOffset(count, offset, limit);
    const href = `/${path}/${buildQueryString({
      offset: offset + limit,
      limit,
    })}`;

    return hasNextOffset ? (
      <Link
        href={href}
        {...rest}
        {...stylex.props([styles.item, styleX])}
        ref={ref}
        prefetch
      >
        {label}
      </Link>
    ) : (
      <span {...stylex.props(styles.disabledItem)}>{label}</span>
    );
  }
});
