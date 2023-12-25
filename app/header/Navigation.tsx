'use client';

import { MainMenu, MainMenuItem } from '@/components/MianMenu';
import { navigation } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';

type Props = ComponentProps<'nav'>;

export default forwardRef<HTMLElement, Props>(function Navigation(
  { className = '', children, ...rest },
  ref
) {
  const currentPath = usePathname();

  return (
    <MainMenu>
      {navigation.map(({ path, name }) => (
        <MainMenuItem
          styleX={currentPath === path && styles.link}
          key={path}
          href={path}
        >
          {name}
        </MainMenuItem>
      ))}
    </MainMenu>
  );
});

const styles = stylex.create({
  link: {
    fontWeight: 600,
  },
});
