import * as stylex from '@stylexjs/stylex';

import { colorScheme } from '../../../../../styles/tokens.stylex';

export const histogramStyles = stylex.create({
  area: {
    fill: colorScheme.histogram,
  },
});
