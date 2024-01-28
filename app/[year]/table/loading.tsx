import * as stylex from '@stylexjs/stylex';

import LoaderSvg from '@/components/LoaderSvg';
import { generic } from '@/styles/generic';

export default function Loading() {
  return (
    <div {...stylex.props(styles.wrapper, generic.centerXY)}>
      <LoaderSvg fullPage />
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    position: 'fixed',
    top: '30vh',
  },
});
