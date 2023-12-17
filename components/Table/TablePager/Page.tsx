import { type ComponentProps, forwardRef } from 'react';
import Link from 'next/link';

import { buildQueryString } from '@/app/table/utils/searchParams';

import { TablePagerConfig, getCurrentPage } from './utils';

type Props = ComponentProps<'a'> & {
  config: TablePagerConfig;
  path: string;
  children: string;
};

export default forwardRef<HTMLAnchorElement, Props>(function Page(
  { className = '', children: label, config, path, ...rest },
  ref
) {
  const { offset, limit } = config;

  const currentPage = getCurrentPage(offset, limit);

  const isDisabled = +label === currentPage || label === '…';
  const href = `/${path}/${buildQueryString({
    offset: limit * +label,
    limit,
  })}`;

  return isDisabled ? (
    label
  ) : (
    <Link className={` ${className}`} href={href} {...rest} ref={ref} prefetch>
      {label}
    </Link>
  );
});
