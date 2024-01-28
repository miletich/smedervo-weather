import * as stylex from '@stylexjs/stylex';

import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';
import YearPicker from './YearPicker';

export default function Header() {
  return (
    <header {...stylex.props(styles.wrapper)}>
      <HeaderTitle />
      <YearPicker />
      <Navigation styleX={styles.navigation} />
    </header>
  );
}

const styles = stylex.create({
  wrapper: {
    padding: '1rem',
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '1fr',
  },
  navigation: {
    justifySelf: 'end',
  },
});
