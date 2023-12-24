import { type ComponentProps, forwardRef } from 'react';
import Link from 'next/link';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

import { buildQueryString } from '@/app/table/utils/searchParams';

import { TablePagerConfig, getCurrentPage } from './utils';
import { styles } from './styles';

type Props = ComponentProps<'a'> & {
  config: TablePagerConfig;
  path: string;
  children: string;
};

export default forwardRef<HTMLAnchorElement, Props>(function Page(
  { style, children: label, config, path, ...rest },
  ref
) {
  const { offset, limit } = config;

  const currentPage = getCurrentPage(offset, limit);

  const isCurrent = +label === currentPage;
  const isDisabled = isCurrent || label === '…';
  const href = `/${path}/${buildQueryString({
    offset: limit * (+label - 1),
    limit,
  })}`;

  return isDisabled ? (
    <span
      {...stylex.props([styles.disabledItem, isCurrent && styles.currentItem])}
    >
      {label}
    </span>
  ) : (
    <Link
      href={href}
      {...rest}
      {...stylex.props([styles.item, style as StyleXStyles])}
      ref={ref}
      prefetch
    >
      {label}
    </Link>
  );
});
