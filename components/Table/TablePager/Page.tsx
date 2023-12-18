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
  const styles = `p-2 w-9 h-9 text-center ${className}`;
  const hoverStyles =
    'hover:bg-indigo-100 hover:rounded-lg hover:font-semibold hover:text-indigo-600';

  const currentPage = getCurrentPage(offset, limit);

  const isDisabled = +label === currentPage || label === '…';
  const href = `/${path}/${buildQueryString({
    offset: limit * (+label - 1),
    limit,
  })}`;

  return isDisabled ? (
    <span className={`${styles} font-bold`}>{label}</span>
  ) : (
    <Link
      className={`${styles} ${hoverStyles}`}
      href={href}
      {...rest}
      ref={ref}
      prefetch
    >
      {label}
    </Link>
  );
});
