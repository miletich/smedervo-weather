import * as stylex from '@stylexjs/stylex';

import { colorScheme, table } from '../../../styles/tokens.stylex';

export const illustrationStyles = stylex.create({
  rowBg: (isEven: boolean) => ({
    fill: isEven ? table.rowBackground : table.rowBackgroundOdd,
  }),
  rowText: {
    fill: colorScheme.text,
  },
  headerBG: {
    fill: table.headerBgColor,
  },
  headerText: {
    fill: table.headerTextColor,
  },
});
