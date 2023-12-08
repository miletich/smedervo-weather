import Link, { type LinkProps } from 'next/link';
import { type PropsWithChildren } from 'react';

export function MainMenu({ children }: PropsWithChildren) {
  return (
    <ul className="flex gap-10 items-center justify-center w-full h-full">
      {children}
    </ul>
  );
}

type MainMenuItemProps = { className?: string } & PropsWithChildren & LinkProps;
export default function MainMenuItem({
  children,
  className,
  ...rest
}: MainMenuItemProps) {
  return (
    <li className={`w-1/3 text-center ${className}`}>
      <Link {...rest}>{children}</Link>
    </li>
  );
}
