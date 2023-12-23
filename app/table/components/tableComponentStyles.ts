import * as stylex from '@stylexjs/stylex';

import { colorScheme } from '../../../styles/tokens.stylex';

export const tableComponentStyles = stylex.create({
  numbers: {
    color: colorScheme.numericColor,
    mixBlendMode: 'multiply',
  },
  gradientWrapper: {
    width: '114px',
  },
  startAlign: {
    textAlign: 'start',
  },
  dateWidth: {
    width: 96,
  },
  descriptionWidth: {
    width: 860,
  },
});
