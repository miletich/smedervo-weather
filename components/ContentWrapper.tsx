import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex/lib/StyleXTypes';
import { generic } from '@/styles/generic';

type Props = { styleX?: StyleXStyles } & PropsWithChildren;
export default function ContentWrapper({ children, styleX }: Props) {
  return (
    <div {...stylex.props([generic.centerXY, styles.wrapper, styleX])}>
      {children}
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    flexDirection: 'column',
    flexGrow: 1,
    // height: '100vh',
  },
});
