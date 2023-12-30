'use client';

import { usePathname, useParams } from 'next/navigation';
import { type ComponentProps, forwardRef } from 'react';

import { MainMenu, MainMenuItem } from '@/components/MianMenu';
import { navigation } from '@/utils/navigation';
import { generic } from '@/styles/generic';

type Props = ComponentProps<'nav'>;

export default forwardRef<HTMLElement, Props>(function Navigation(
  { className = '', children, ...rest },
  ref
) {
  const currentPath = usePathname();
  const { year } = useParams<{ year: string }>();

  return (
    <MainMenu>
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
