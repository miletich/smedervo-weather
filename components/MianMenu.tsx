import Link, { type LinkProps } from 'next/link';
import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

import { generic } from '@/styles/generic';

type Props = PropsWithChildren & {
  styleX?: StyleXStyles;
};
export function MainMenu({ children, styleX }: Props) {
  return (
    <nav aria-label="Main Navigation">
      <ul {...stylex.props([generic.centerXY, styles.wrapper, styleX])}>
        {children}
      </ul>
    </nav>
  );
}

type MainMenuItemProps = Props & LinkProps;
export function MainMenuItem({ children, styleX, ...rest }: MainMenuItemProps) {
  return (
    <li {...stylex.props([styles.item, styleX])}>
      <Link {...rest}>{children}</Link>
    </li>
  );
}

const styles = stylex.create({
  wrapper: {
    width: '100%',
    gap: '2.5rem',
  },
  item: {
    textAlign: 'center',
  },
});
