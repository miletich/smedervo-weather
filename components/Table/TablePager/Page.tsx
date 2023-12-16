import { type ComponentProps, forwardRef } from 'react';
import Link from 'next/link';

import { buildQueryString } from '@/app/table/utils/searchParams';

import { TablePagerConfig, getCurrentPage } from './utils';

type Props = ComponentProps<'a'> &
  Exclude<TablePagerConfig, 'count'> & { routeName: string; children: string };

export default forwardRef<HTMLAnchorElement, Props>(function Page(
  { className = '', children: label, offset, limit, routeName, ...rest },
  ref
) {
  const currentPage = getCurrentPage(offset, limit);

  const isDisabled = +label === currentPage || label === '…';
  const href = `/${routeName}/${buildQueryString({
    offset: limit * +label,
    limit,
  })}`;

  return isDisabled ? (
    label
  ) : (
    <Link className={` ${className}`} href={href} {...rest} ref={ref}>
      {label}
    </Link>
  );
});
