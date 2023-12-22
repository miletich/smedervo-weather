import Link, { type LinkProps } from 'next/link';
import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';

type Props = PropsWithChildren & {
  style?: StyleXStyles;
};
export function MainMenu({ children, style }: Props) {
  return <ul {...stylex.props([styles.wrapper, style])}>{children}</ul>;
}

type MainMenuItemProps = { className?: string } & Props & LinkProps;
export default function MainMenuItem({
  children,
  className,
  style,
  ...rest
}: MainMenuItemProps) {
  return (
    <li className={className} {...stylex.props([styles.item, style])}>
      <Link {...rest}>{children}</Link>
    </li>
  );
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    gap: '2.5rem',
  },
  item: {
    width: '33.333333%',
    textAlign: 'center',
  },
});
