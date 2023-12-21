import { type PropsWithChildren } from 'react';
import * as stylex from '@stylexjs/stylex';

export default function ContentWrapper({ children }: PropsWithChildren) {
  return <div {...stylex.props(styles.wrapper)}>{children}</div>;
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
