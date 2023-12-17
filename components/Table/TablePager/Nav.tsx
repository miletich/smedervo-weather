import { type ComponentProps, forwardRef } from 'react';
import Link from 'next/link';

import { buildQueryString } from '@/app/table/utils/searchParams';

import {
  TablePagerConfig,
  getHasNextOffset,
  getHasPreviousOffset,
} from './utils';

type Props = ComponentProps<'a'> & {
  config: TablePagerConfig;
  path: string;
  children: string;
};

export default forwardRef<HTMLAnchorElement, Props>(function Nav(
  { className = '', children: label, config, path, ...rest },
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
      <Link className={` ${className}`} href={href} {...rest} ref={ref}>
        {label}
      </Link>
    ) : (
      label
    );
  } else {
    const hasNextOffset = getHasNextOffset(count, offset, limit);
    const href = `/${path}/${buildQueryString({
      offset: offset + limit,
      limit,
    })}`;

    return hasNextOffset ? (
      <Link className={` ${className}`} href={href} {...rest} ref={ref}>
        {label}
      </Link>
    ) : (
      label
    );
  }
});
