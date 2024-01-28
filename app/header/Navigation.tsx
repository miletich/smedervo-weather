'use client';

import { usePathname, useParams } from 'next/navigation';
import { type ComponentProps, forwardRef } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';

import { MainMenu, MainMenuItem } from '@/components/MainMenu';
import { navigation } from '@/utils/navigation';
import { generic } from '@/styles/generic';

type Props = ComponentProps<'nav'> & { styleX?: StyleXStyles };

export default forwardRef<HTMLElement, Props>(function Navigation(
  { className = '', children, styleX, ...rest },
  ref
) {
  const currentPath = usePathname();
  const { year } = useParams<{ year: string }>();

  return (
    <MainMenu styleX={styleX}>
      {navigation.map(({ path, name }) => (
        <MainMenuItem
          styleX={currentPath.includes(path) && generic.headerActive}
          key={path}
          href={`/${year}${path}`}
        >
          {name}
        </MainMenuItem>
      ))}
    </MainMenu>
  );
});
