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
  const styles = `w-9 h-9 p-2 text-center ${className}`;
  const hoverStyles = 'hover:bg-indigo-200 hover:rounded-lg hover:font-bold';
  const disabledStyles = `${styles} pointer-events-none`;

  if (label === '<') {
    const hasPreviousOffset = getHasPreviousOffset(offset);
    const href = `/${path}/${buildQueryString({
      offset: offset - limit,
      limit,
    })}`;

    return hasPreviousOffset ? (
      <Link
        className={`${styles} ${hoverStyles}`}
        href={href}
        {...rest}
        ref={ref}
      >
        {label}
      </Link>
    ) : (
      <span className={disabledStyles}>{label}</span>
    );
  } else {
    const hasNextOffset = getHasNextOffset(count, offset, limit);
    const href = `/${path}/${buildQueryString({
      offset: offset + limit,
      limit,
    })}`;

    return hasNextOffset ? (
      <Link
        className={`${styles} ${hoverStyles}`}
        href={href}
        {...rest}
        ref={ref}
        prefetch
      >
        {label}
      </Link>
    ) : (
      <span className={disabledStyles}>{label}</span>
    );
  }
});
