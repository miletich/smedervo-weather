import * as stylex from '@stylexjs/stylex';

import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header {...stylex.props(styles.wrapper)}>
      <HeaderTitle />
      <Navigation />
    </header>
  );
}

const styles = stylex.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
});
