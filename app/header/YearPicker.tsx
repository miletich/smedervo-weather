'use client';

import { usePathname, useParams } from 'next/navigation';
import { type ComponentProps, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';

import { MainMenu, MainMenuItem } from '@/components/MainMenu';
import { navigation } from '@/utils/navigation';
import { generic } from '@/styles/generic';
import { years } from '@/static/years';

type Props = ComponentProps<'nav'>;

export default forwardRef<HTMLElement, Props>(function YearPicker(
  { className = '', children, ...rest },
  ref
) {
  const path = usePathname();
  const graphSegment = path.match(/[a-z-]/g)?.join('');
  const { year: currentYear } = useParams<{ year: string }>();

  return (
    <MainMenu styleX={styles.wrapper}>
      {years.map((year) => (
        <MainMenuItem
          styleX={[
            styles.item,
            path.includes(String(year)) && generic.headerActive,
          ]}
          key={year}
          href={graphSegment ? `/${year}/${graphSegment}` : `/${year}`}
        >
          {year}
        </MainMenuItem>
      ))}
    </MainMenu>
  );
});

const styles = stylex.create({
  wrapper: {
    gap: '0.5rem',
  },
  item: {
    fontWeight: 600,
  },
});
