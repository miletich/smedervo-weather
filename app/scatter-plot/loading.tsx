import LoaderSvg from '@/components/LoaderSvg';
import * as stylex from '@stylexjs/stylex';

export default function Loading() {
  return <LoaderSvg styleX={styles.sizing} />;
}

const styles = stylex.create({
  sizing: {
    width: 72,
    height: 28,
    margin: 80,
  },
});
