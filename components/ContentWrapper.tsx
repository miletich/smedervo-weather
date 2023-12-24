import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

type Props = { style?: stylex.StyleXStyles } & PropsWithChildren;
export default function ContentWrapper({ children, style }: Props) {
  return <div {...stylex.props([styles.wrapper, style])}>{children}</div>;
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
});
