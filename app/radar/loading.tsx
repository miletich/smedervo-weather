import * as stylex from '@stylexjs/stylex';

import LoaderSvg from '@/components/LoaderSvg';

export default function Loading() {
  return <LoaderSvg {...stylex.props(styles.loader)} />;
}

const styles = stylex.create({
  loader: {
    width: 72,
    height: 28,
    margin: 80,
  },
});
